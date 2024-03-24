import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RegistrationComponent } from "./registration/registration.component";

const routes: Routes = [
    {
        path: 'registration',
        children: [
            {
                path: '',
                component: RegistrationComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'registration',
        pathMatch: 'full'
      }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false }),],
    exports: [RouterModule]
})
export class AppRoutingModule { }