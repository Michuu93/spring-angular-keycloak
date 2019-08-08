package pl.mhoja.springangularkeycloakdemo.keycloak

import org.springframework.beans.factory.annotation.Value
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/keycloak")
class KeycloakController(private val config: KeycloakProperties, @Value("\${keycloakRequiredUserRole}") requiredUserRole: String) {

    init {
        this.config.requiredUserRole = requiredUserRole
    }

    @GetMapping("/config")
    fun config(): KeycloakProperties = config
}
