import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppAuthGuard} from './app-auth.guard';
import {ProtectedComponent} from './protected/protected.component';
import {PublicComponent} from './public/public.component';

const routes: Routes = [
    {
        path: '',
        component: PublicComponent
    },
    {
        path: 'protected',
        component: ProtectedComponent,
        canActivate: [AppAuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
