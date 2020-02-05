export class Contacto {
    id: number;
    nombre: string;
    foto?: string;
    correo?: string;
    telefonos?: Telefonos[];
    direccion?: string;
    departamento?: string;
    municipio?: string;
}

export class Telefonos {
    tipo: string;
    numero: string;
}