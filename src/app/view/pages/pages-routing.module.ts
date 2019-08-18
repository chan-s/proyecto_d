import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InicioComponent } from "./inicio/inicio.component";
import { PagesComponent } from "./pages.component";

import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
    {
      path: '',
    canActivate: [AuthGuard],
      component: PagesComponent,
      children: [
          { path: 'inicio', component: InicioComponent },
          { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      ]
    }
  ];

export const PagesRoutingModule = RouterModule.forChild (routes)
