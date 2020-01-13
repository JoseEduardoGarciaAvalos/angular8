import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-correo',
  templateUrl: './lista-correo.component.html',
  styleUrls: ['./lista-correo.component.scss']
})
export class ListaCorreoComponent implements OnInit {

  correos: any;
  constructor() { 
    this.correos = [
      {
        estado: true,
        titulo: "Correo 1",
        cuerpo: "HOLA QUE TAL",
        emisor: "hola@gmail.com"
      },
      {
        estado: false,
        titulo: "Correo 2",
        cuerpo: "HOLA QUE TAL 2",
        emisor: "hola2@gmail.com"
      },
      {
        estado: false,
        titulo: "Correo 3",
        cuerpo: "HOLA QUE TAL 3 ",
        emisor: "hola3@gmail.com"
      },
      {
        estado: false,
        titulo: "Correo 4",
        cuerpo: "HOLA QUE TAL 4",
        emisor: "hola4@gmail.com"
      }
    ];
  }

  ngOnInit() {
  }

  responderCorreo(correo){
    correo.responder = !correo.responder;
  }

}
