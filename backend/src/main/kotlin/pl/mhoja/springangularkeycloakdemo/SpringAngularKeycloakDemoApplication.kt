package pl.mhoja.springangularkeycloakdemo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.boot.runApplication
import pl.mhoja.springangularkeycloakdemo.keycloak.KeycloakProperties

@SpringBootApplication
@EnableConfigurationProperties(KeycloakProperties::class)
class SpringAngularKeycloakDemoApplication

fun main(args: Array<String>) {
    runApplication<SpringAngularKeycloakDemoApplication>(*args)
}
