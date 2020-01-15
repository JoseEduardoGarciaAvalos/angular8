import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantesService {

  telefono:string[] = [
    "Fijo",
    "Móvil"
  ];

  departamentos:string[] = [
    "Cuscatlán",
    "Cabañas",
    "San Vicente"
  ];

  municipios:string[][] = [
    [ 
      "Cojutepeque",
      "El Carmen",
      "Suchitoto",
      "San Rafael Cedros"
    ],
    [
      "Ilobasco",
      "Tejutepeque",
      "Sensuntepeque"
    ],
    [
      "San Vicente",
      "Tecoluca"
    ]
  ]
  constructor() { }
}
