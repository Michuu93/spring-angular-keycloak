package pl.mhoja.springangularkeycloakdemo

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@RestController
@RequestMapping("/api")
class MainController {
    @GetMapping("/hello")
    fun hello(): String = "Hello from the Backend!"

    @GetMapping("/logout")
    fun logout(request: HttpServletRequest, response: HttpServletResponse) {
        request.logout()
        response.sendRedirect("/")
    }
}
