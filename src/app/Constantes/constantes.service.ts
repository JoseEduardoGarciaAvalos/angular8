import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantesService {

  telefono:string[] =[
    "fijo",
    "móvil"
  ];

  departamentos: string[] = [
    "Cuscatlán",
    "San vicente",
    "Cabañas"
  ];

  municipios: string[][] = [
    [
      "Cojutepeque",
      "El Carmen",
      "Suchitoto"
    ],
    [
      "San vicente",
      "Tecoluca"
    ],
    [
      "Ilobasco",
      "Sensuntepeque"
    ]
  ];


  constructor() { }
}
