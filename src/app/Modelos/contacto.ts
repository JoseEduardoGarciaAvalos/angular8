export class Contacto{
    constructor(
        public id:number,
        public nombre:string,
        public imagen?:string,
        public telefonos?:ContactoTelefono[],
        public correo?:string,
        public direccion?:string
    ){}
}
export interface ContactoTelefono {
    tipo: TelefonoTipo;
    numero:number;
}

export enum TelefonoTipo {
    movil = "Móvil",
    casa = "casa",
    trabajo = "trabajo"
}
