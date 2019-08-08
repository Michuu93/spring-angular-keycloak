export class KeycloakConfig {
    enabled: boolean;
    authServerUrl: string;
    realm: string;
    resource: string;
    requiredUserRole: string;
    credentials: Credentials;
}

class Credentials {
    secret: string;
}
