import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ConstantesService} from 'src/app/Interfaces/constantes.service';
import { filter, map, tap} from 'rxjs/operators'
import { zip } from 'rxjs'


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  fTelefono = {
    tipo: [null],
    numero: ["",[Validators.pattern('[0-9]{4}')]]
  };

  fTelefonos = this.fb.array([
      this.fb.group(
        this.fTelefono
      )
  ]);

  fContacto = this.fb.group({
    nombre: ["",[Validators.required]],
    foto: ["assets/perfil.png"],
    telefonos: this.fTelefonos,
    correo: ["",[Validators.email]],
    direccion: [""],
    departamento: [null],
    municipio: [null]
  });




  constructor(private fb:FormBuilder, private constantes:ConstantesService) { }

  ngOnInit() {
    const contacto = localStorage.getItem("contacto");
    if(contacto){
      const contactoJSON = JSON.parse(contacto);
      
      this.fContacto.setValue(contactoJSON);
    }


    zip(this.fContacto.statusChanges,this.fContacto.valueChanges).pipe(
      filter(([estado,valor])=> estado == "VALID"),
      map(([estado,valor]) => valor),
    ).subscribe(
      (registro) => {
        var json = JSON.stringify(registro);
        localStorage.setItem("contacto",json);
      }
    );

  }

  guardarContacto(){

  }


  agregarTelefono(){
    this.fTelefonos.push(this.fb.group(this.fTelefono));
  }  

  eliminarTelefono(i:number){
    i==0 ? this.fTelefonos.controls[0].reset() : this.fTelefonos.removeAt(i);
  }

  eliminarTelefonos(){
    this.fTelefonos.clear();
    this.agregarTelefono();
  }

  resetearMunicipio(){
    this.fContacto.controls.municipio.reset();
  }

  cargarImagen(event){
    const foto = event.target.files[0];
    var lector = new FileReader();
    lector.readAsDataURL(foto);
    lector.onload = (e) => {
      this.fContacto.patchValue({
        foto: lector.result
      })
    };
  }


  ver(){
    console.log(this.fContacto);
  }

}
