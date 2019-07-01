package pl.mhoja.springangularkeycloakdemo

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class MainController {

    @GetMapping("/hello")
    fun greeting(): String = "Hello World!"
}