import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {KeycloakAuthGuard, KeycloakService} from 'keycloak-angular';
import {KeycloakConfigService} from './keycloak/keycloak-config.service';

@Injectable({
    providedIn: 'root'
})
export class AppAuthGuard extends KeycloakAuthGuard {
    isAuthEnabled: boolean = true;
    requiredUserRole: string;

    constructor(protected router: Router, protected keycloakService: KeycloakService, private keycloakConfigService: KeycloakConfigService) {
        super(router, keycloakService);
        this.keycloakConfigService.getConfig().subscribe(config => {
            this.isAuthEnabled = config.enabled;
            this.requiredUserRole = config.requiredUserRole;
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        if (!this.isAuthEnabled) {
            return Promise.resolve(true);
        } else {
            return super.canActivate(route, state);
        }
    }

    isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return new Promise(async (resolve) => {
            if (!this.authenticated) {
                return this.keycloakService.login();
            }
            resolve(this.roles.includes(this.requiredUserRole));
        });
    }
}
