import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {AvisosService} from 'src/app/Services/avisos.service'

@Component({
  selector: 'app-enviar-correo',
  templateUrl: './enviar-correo.component.html',
  styleUrls: ['./enviar-correo.component.scss']
})
export class EnviarCorreoComponent implements OnInit {

  nuevoCorreo: FormGroup;
  enviado = false;
  @Input() correo: any;
  @Output() accion: EventEmitter<any> = new EventEmitter();

  constructor(private validacion:FormBuilder, private aviso:AvisosService) { }

  ngOnInit() {
    this.nuevoCorreo = this.validacion.group({
      titulo: ["",[Validators.required, Validators.minLength(3)]],
      cuerpo: ["",[Validators.required, Validators.minLength(5)]],
      destinatario: ["",[Validators.required, Validators.email]]
    });

    if(this.correo != undefined){
      this.nuevoCorreo.patchValue({
        titulo: "RE: " + this.correo.titulo,
        destinatario: this.correo.emisor
      });
    }
  }

  get fnuevoCorreo() {return this.nuevoCorreo.controls;}

  onSubmit(){
    this.enviado = true;

    if(this.nuevoCorreo.invalid){
      return;
    }

    //alert("Mensaje enviado");
    this.aviso.verMensaje("Mensaje enviado");

    this.onReset();
  }

  onReset(){
    this.enviado = false;
    this.nuevoCorreo.reset();
    this.accion.emit();
  }

  onCancel(){
    this.aviso.verMensaje("Mensaje cancelado");
    this.onReset();
  }
}
