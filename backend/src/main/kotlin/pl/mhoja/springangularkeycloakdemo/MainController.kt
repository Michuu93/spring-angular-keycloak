package pl.mhoja.springangularkeycloakdemo

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class MainController {
    @GetMapping("/hello")
    fun hello(): String = "Hello from the Backend!"
}