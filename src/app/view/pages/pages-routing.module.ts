import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InicioComponent } from "./inicio/inicio.component";
import { PagesComponent } from "./pages.component";
import { AuthGuard } from 'src/app/data/guard/auth.guard';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
    {
      path: '',
      canActivate: [AuthGuard],
      component: PagesComponent,
      children: [
          { path: 'inicio', component: InicioComponent },
          { path: 'info', component: InfoComponent },
          { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
