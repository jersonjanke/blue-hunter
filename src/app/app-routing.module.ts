import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientFormComponent } from "./client/client-form/client-form.component";

const appRoutes: Routes = [  
  { path: 'client', component: ClientFormComponent},
  { path: '', pathMatch: 'full', redirectTo: 'client' }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}