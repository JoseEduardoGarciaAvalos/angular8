import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray} from '@angular/forms';
import { TipoTelefono } from 'src/app/Models/contacto';
import { ConstanteService } from 'src/app/Services/constante.service';
import { tap, filter, map } from 'rxjs/operators';
import { zip } from 'rxjs';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {


  formularioContacto = this.fb.group({
    nombre: ["",[Validators.required]],
    foto: ["assets/perfil.jfif"],
    telefonos: this.fb.array([
      this.fb.group({
        tipo: [null],
        numero: ["",[Validators.pattern("[0-9]{4}-[0-9]{4}")]]
      })
    ]),
    correo: ["",[Validators.email]],
    direccion: [""],
    departamento: [null],
    municipio: [null]
  });

  public tipoTelefono:string[] = Object.values(TipoTelefono);

  constructor(private fb:FormBuilder, public constantes:ConstanteService) { }

  ngOnInit() {
    zip(this.formularioContacto.statusChanges, this.formularioContacto.valueChanges).pipe(
      filter( ([estado, valor]) => estado == 'VALID' ),
      map(([estado, valor]) =>  valor),
    ).subscribe(formValue => {console.log(formValue);
    });
  }


  get fContacto() { return this.formularioContacto.controls;}

  get fTelefonos() { return (this.formularioContacto.get("telefonos") as FormArray).controls;}

  guardarContacto(){

  }

  // SOBRE EL TELEFONO
  agregarTelefono(){
    this.fTelefonos.push(
      this.fb.group({
        tipo: [null],
        numero: [""]
      })
    );
  }

  eliminarTelefono(i:number){
    if(this.fTelefonos.length!=1){
      this.fTelefonos.splice(i,1);
    }
  }

  eliminarTelefonos(){
    this.fTelefonos.splice(0);
    this.agregarTelefono();
  }

  // SOBRE DEPARTAMENTO
  cambiarDepartamento(){
    this.fContacto.municipio.reset();    
  }

  //SOBRE LA FOTO
  actualizarFoto(event){
    const archivo = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(archivo);
    reader.onload = (ev) => {
      this.formularioContacto.patchValue({
        foto: reader.result
      });
    }
  }
}
