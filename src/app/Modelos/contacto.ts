import { Telefono } from './Telefono';

export class Contacto{
    id: number;
    nombre: string;
    foto?: string;
    telefonos?:Telefono[];
    correo?:string;
    direccion?:string;
    departamento?:number;
    municipio?:number;
}