import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ConstantesService } from 'src/app/Constantes/constantes.service';
import { zip } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.scss']
})
export class NuevoContactoComponent implements OnInit {


  fTelefono = {
    tipo: [""],
    numero: ["", [Validators.pattern('[0-9]{4}-[0-9]{4}')]]
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
    const json = localStorage.getItem("contacto");
    if (json != undefined) {
      var aux = JSON.parse(json);
      this.fTelefonos.clear();
      for(let i=0 ; i<aux.telefonos.length;i++){
        this.agregarTelefono();
      }
      this.fContacto.patchValue(aux);
    }



    zip(this.fContacto.statusChanges, this.fContacto.valueChanges).pipe(
      filter(([estado, valor]) => estado == "VALID"),
      map(([estado, valor]) => valor),
    ).subscribe(
      (valor) => localStorage.setItem("contacto", JSON.stringify(valor))
    );
  }

  cambiarFoto(event) {

    const archivo = event.target.files[0];
    var lector = new FileReader();
    lector.readAsDataURL(archivo);
    lector.onload = (evt) => {
      this.fContacto.patchValue({
        foto: lector.result
      });
    };
  }

  agregarTelefono() {
    this.fTelefonos.push(
      this.fb.group(this.fTelefono));
  }

  eliminarTelefono(i) {
    this.tsc.splice(i, 1);
  }

  eliminarTelefonos() {
    this.fTelefonos.clear();
    this.fTelefonos.reset();
    this.agregarTelefono();
  }

  guardarContacto() {
    console.log("Se guardo");
  }

  get cc() { return this.fContacto.controls; }
  get cv() { return this.fContacto.value; }

  get tsc() { return this.fTelefonos.controls; }

  depurar() {
    console.log(this.fContacto);
    //<button (click)="depurar()">Ver</button>
  }

}
