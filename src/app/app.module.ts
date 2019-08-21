import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase modulos
import { AngularFireModule, FirebaseOptionsToken } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from 'src/environments/environment';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './view/pages/login/login.component';
import { PagesModule } from './view/pages/pages.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PagesModule,
    FormsModule,
    AngularFireModule,
    AngularFireAuthModule,
  ],
  providers: [
    { provide: FirebaseOptionsToken, useValue: environment.SETTINGS.FIREBASE }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
