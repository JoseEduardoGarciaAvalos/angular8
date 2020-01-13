import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  mensaje: string = "";
  visible: boolean = false;

  constructor() { 
  }

  verMensaje(mensaje: string){
    this.mensaje = mensaje;
    this.visible = true;
    setTimeout(()=>{this.ocultarMensaje()},3000);

  }

  ocultarMensaje(){
    this.visible = false;
  }
}
