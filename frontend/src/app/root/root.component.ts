import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-toolbar></app-toolbar>
        <router-outlet></router-outlet>`,
    styles: [``]
})
export class RootComponent {
}
