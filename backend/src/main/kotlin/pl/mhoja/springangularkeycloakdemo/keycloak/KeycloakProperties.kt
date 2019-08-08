package pl.mhoja.springangularkeycloakdemo.keycloak

import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties(prefix = "keycloak")
class KeycloakProperties {
    var enabled: Boolean? = null
    var authServerUrl: String? = null
    var realm: String? = null
    var resource: String? = null
    var requiredUserRole: String? = null
    var credentials: Credentials? = null
}

class Credentials {
    var secret: String? = null
}
