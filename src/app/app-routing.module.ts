import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./view/pages/login/login.component";
import { PagesComponent } from './view/pages/pages.component';
import { InicioComponent } from './view/pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent 
  },
  // {
  //   path: 'inicio',
  //   component: PagesComponent 
  // },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
