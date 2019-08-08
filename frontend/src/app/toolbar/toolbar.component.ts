import {Component} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
    selector: 'app-toolbar',
    template: `
        <div class="toolbar">
            <button (click)="logout()">Logout</button>
        </div>
    `,
    styles: [`
    `]
})
export class ToolbarComponent {
    constructor(private keycloakService: KeycloakService) {
    }

    logout = async (): Promise<void> => {
        await this.keycloakService.logout();
    }
}
