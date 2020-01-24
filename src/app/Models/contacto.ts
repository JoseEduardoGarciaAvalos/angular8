export class Contacto{

    id: number;
    nombre: string;
    foto?:string;
    correo?:string;
    telefonos?:Telefono[];
    direccion?:string;
    departamento?:string;
    municipio?:string;

}

export class Telefono{
    tipo: string;
    numero: string;
}