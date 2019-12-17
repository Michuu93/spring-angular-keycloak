# spring-angular-keycloak-demo
Spring Boot + Angular + Keycloak implemntation with common configuration.

#### Keycloak Server
Run:
```shell
docker run --rm --name keycloak-server -p 8180:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin -e KEYCLOAK_IMPORT=/realm/realm-export.json -v $(pwd)/realm/:/realm/ jboss/keycloak
```
Admin Console:  
http://127.0.0.1:8180/auth/admin/  
`admin:admin`

Available users:  
`user:password` with role `user_role`  
`user2:password2` with default roles

#### Application
Build:
```shell
docker build -t michuu93/spring-angular-keycloak-demo .
```
Run:
```shell
docker run --rm --name spring-angular-keycloak-demo -p 8080:9082 michuu93/spring-angular-keycloak-demo
```
Open:  
http://localhost:8080/
