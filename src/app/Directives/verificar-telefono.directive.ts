import { Directive, Input } from '@angular/core';
import { ValidationErrors, AbstractControl, Validator, ValidatorFn, NG_VALIDATORS} from '@angular/forms';

export function verificarTipoTelefono() : ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    if(!control.value){
      return null;
    }
    const tipo = control.parent.value.tipo;
    const numero = control.parent.value.numero;
    var mensaje = null;

    console.log(control);
    if(tipo == undefined && numero != undefined){
      mensaje = "Debe definir el tipo de teléfono";
    } else if(tipo !== undefined && numero != undefined){
      if(tipo==1 && !/^[76]/.test(numero)){
        mensaje = "Los números de celulares deben empezar con 7 o 6"
      } else if(tipo==0 && !/^[2]/.test(numero)){
        mensaje = "Los números fijos deben empezar con 2"
      }
    }
    const valido = mensaje == undefined;
    return valido ? null : {'verificarTelefono':{value:mensaje}};
  }
}

@Directive({
  selector: '[verificarTelefono]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: VerificarTelefonoDirective,
    multi: true
  }]
})
export class VerificarTelefonoDirective implements Validator{
  @Input('verificarTelefono') estaActivo:boolean;

  validate(control: AbstractControl): ValidationErrors | null {
    return !this.estaActivo ? null :verificarTipoTelefono()(control);
  }

}
