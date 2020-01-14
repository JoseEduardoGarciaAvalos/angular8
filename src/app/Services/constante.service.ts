import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstanteService {

  Departamentos:string[] = [
    "Cabañas",
    "San Vicente",
    "Cuscatlán"
  ];

  Municipios:string[][] = [
    [ 
      "Ilobasco",
      "Sensuntepeque"
    ],
    [
      "San Vicente",
      "Tecoluca"
    ],
    [
      "Cojutepeque",
      "Suchitoto",
      "El Carmen"
    ]
  ];

  constructor() { }
}
