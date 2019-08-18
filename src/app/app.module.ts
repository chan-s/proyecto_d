import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './view/pages/login/login.component';
import { PagesModule } from './view/pages/pages.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule, FirebaseOptionsToken } from '@angular/fire';
import { environment } from 'src/environments/environment';


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
    AngularFireModule,
    AngularFireAuthModule,
  ],
  providers: [
    { provide: FirebaseOptionsToken, useValue: environment.SETTINGS.FIREBASE }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
