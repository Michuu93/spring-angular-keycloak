import {KeycloakService} from 'keycloak-angular';
import {KeycloakConfigService} from './keycloak/keycloak-config.service';
import {filter, flatMap} from 'rxjs/operators';

export function initializer(keycloakService: KeycloakService, keycloakConfigService: KeycloakConfigService): () => Promise<boolean> {
    return (): Promise<boolean> => keycloakConfigService.getConfig()
        .pipe(
            filter(config => config.enabled),
            flatMap(config => {
                return keycloakService.init({
                    config: {
                        url: config.authServerUrl,
                        realm: config.realm,
                        clientId: config.resource,
                        credentials: {
                            secret: config.credentials.secret
                        }
                    },
                    initOptions: {
                        onLoad: 'check-sso',
                        checkLoginIframe: false
                    }
                });
            })).toPromise();
}
