import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {RootComponent} from './root/root.component';
import {initializer} from './app-initializer';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {KeycloakConfigService} from './keycloak/keycloak-config.service';
import {ProtectedComponent} from './protected/protected.component';
import {HttpClientModule} from '@angular/common/http';
import {PublicComponent} from './public/public.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
    declarations: [
        RootComponent,
        ToolbarComponent,
        ProtectedComponent,
        PublicComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        KeycloakAngularModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initializer,
            multi: true,
            deps: [KeycloakService, KeycloakConfigService]
        },
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [RootComponent]
})
export class AppModule {
}
