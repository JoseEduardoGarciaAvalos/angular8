export class Contacto{
    id:number;
    nombre:string;
    foto?:string;
    telefonos?:ContactoTelefono[];
    correo?:string;
    direccion?:string;
    departamento?:number;
    municipio?:number;
}

export interface ContactoTelefono{
    tipo:TipoTelefono;
    numero:string;
}

export enum TipoTelefono{
    celular = "Celular",
    fijo = "Fijo"
}