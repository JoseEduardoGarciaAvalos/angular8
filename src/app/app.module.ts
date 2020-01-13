import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCorreoComponent } from './Components/lista-correo/lista-correo.component';
import { EnviarCorreoComponent } from './Components/enviar-correo/enviar-correo.component';
import { AvisoComponent } from './Components/aviso/aviso.component';
import { LoginComponent } from './Components/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import {
    GoogleApiModule, 
    GoogleApiService, 
    GoogleAuthService, 
    NgGapiClientConfig, 
    NG_GAPI_CONFIG,
    GoogleApiConfig
} from "ng-gapi";

let gapiClientConfig: NgGapiClientConfig = {
  client_id: "911060665600-sppe939t96hr77nu5dplu1drfpfpiggd.apps.googleusercontent.com",
  discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
  ux_mode: "popup",
  redirect_uri: "http://localhost:4200/",
  scope: [
      "https://www.googleapis.com/auth/userinfo.profile"
  ].join(" ")
};

@NgModule({
  declarations: [
    AppComponent,
    ListaCorreoComponent,
    EnviarCorreoComponent,
    AvisoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
