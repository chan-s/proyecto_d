import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InicioComponent } from "./inicio/inicio.component";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
    {
      path: '',
    //   canActivate: [AuthGuard],
      component: PagesComponent,
      children: [
          { path: 'inicio', component: InicioComponent },
          { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
