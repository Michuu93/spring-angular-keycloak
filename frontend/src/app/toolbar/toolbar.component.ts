import {Component} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
    selector: 'app-toolbar',
    template: `
        <button routerLink="/">Public</button>
        <button routerLink="/protected">Protected</button>
        <button onclick="window.location.href = '/api/keycloak/config';">Keycloak Configuration</button>
        <button onclick="window.location.href = '/api/hello';">Backend Hello</button>
        <button (click)="logout()">Logout</button>
    `
})
export class ToolbarComponent {
    constructor(private keycloakService: KeycloakService) {
    }

    logout = async (): Promise<void> => {
        await this.keycloakService.logout();
    }
}
