import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ConstantesService } from 'src/app/Services/constantes.service';
import { zip } from 'rxjs';
import { tap, filter, map } from 'rxjs/operators'
import { verificarTipoTelefono } from 'src/app/Directives/verificar-telefono.directive'

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.scss']
})
export class NuevoContactoComponent implements OnInit {

  fTelefono = {
    tipo: [null, verificarTipoTelefono()],
    numero: ["",[Validators.pattern("[0-9]{4}-[0-9]{4}"), verificarTipoTelefono()]]
  }

  fTelefonos = this.fb.array([
    this.fb.group(this.fTelefono)
  ]);

  fContacto = this.fb.group({
    nombre: ["", [Validators.required]],
    foto: ["assets/default-user.png"],
    correo: ["", [Validators.email]],
    telefonos: this.fTelefonos,
    direccion: [""],
    departamento: [null],
    municipio: [null]
  });


  constructor(private fb: FormBuilder, private constantes: ConstantesService) { }

  ngOnInit() {
    const aux = localStorage.getItem("contacto");
    if(aux != undefined){
      var valores = JSON.parse(aux);
      this.eliminarTelefono(0);
      for(let i=0; i<valores.telefonos.length; i++){
        this.agregarTelefono();
      }
      this.fContacto.setValue(valores);
    }

    zip(this.fContacto.statusChanges, this.fContacto.valueChanges).pipe(
      filter(([estado,valor]) => estado=="VALID"),
      map(([estado,valor]) => valor)
      //tap((estado) => console.log(estado))
    ).subscribe(
      (valor) => {
        localStorage.setItem("contacto",JSON.stringify(valor))
      }
    );
  }

  get fcc() {return this.fContacto.controls;}
  get fcv() {return this.fContacto.value;}
  get ftc() {return this.fTelefonos.controls;}

  cargarFoto(event){
    const archivo = event.target.files[0];
    let lector = new FileReader();
    lector.readAsDataURL(archivo);
    lector.onload = () => {
      this.fContacto.patchValue({
        foto: lector.result
      })
    };
  }

  agregarTelefono(){
    this.fTelefonos.push(
      this.fb.group(this.fTelefono)
    );
  }

  eliminarTelefono(i: number){
    this.fTelefonos.removeAt(i);
  }

  ver(){
    console.log(this.fContacto);
  }

}
