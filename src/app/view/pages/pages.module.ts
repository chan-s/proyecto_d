import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ChartsModule } from 'ng2-charts';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';

import { InicioComponent } from './inicio/inicio.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    PagesComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PagesRoutingModule,
    HttpClientModule,
    ChartsModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    // ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [PagesComponent]
})
export class PagesModule { }
