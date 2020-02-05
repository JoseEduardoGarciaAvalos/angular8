import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoContactoComponent } from './Componets/nuevo-contacto/nuevo-contacto.component';
import { VerificarTelefonoDirective } from './Directives/verificar-telefono.directive';

@NgModule({
  declarations: [
    AppComponent,
    NuevoContactoComponent,
    VerificarTelefonoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
