import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './root/app.component';
import {initializer} from './app-initializer';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {KeycloakConfigService} from './keycloak/keycloak-config.service';
import {ProtectedComponent} from './protected/protected.component';
import {HttpClientModule} from '@angular/common/http';
import {PublicComponent} from './public/public.component';
import {ToolbarComponent} from './toolbar/toolbar.component';

@NgModule({
    declarations: [
        AppComponent,
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
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
