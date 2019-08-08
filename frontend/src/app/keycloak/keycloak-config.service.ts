import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {KeycloakConfig} from './keycloak-config.model';

@Injectable({providedIn: 'root'})
export class KeycloakConfigService {
    private config: KeycloakConfig;

    constructor(private http: HttpClient) {
    }

    getConfig(): Observable<KeycloakConfig> {
        if (this.config) {
            return of(this.config);
        } else {
            const configObservable = this.http.get<KeycloakConfig>('/api/keycloak/config');
            configObservable.subscribe(config => this.config = config);
            return configObservable;
        }
    }
}
