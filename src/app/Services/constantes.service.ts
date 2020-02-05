import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantesService {

  telefonos: string[] = [
    "fijo",
    "móvil"
  ];

  departamentos: string[] = [
    "Cuscatlán",
    "Cabañas",
    "San Vicente"
  ];

  municipios: string[][] = [
    [
      "Cojutepeque",
      "El Carmen",
      "Suchitoto",
    ],
    [
      "Ilobasco",
      "Sensuntepeque"
    ],
    [
      "San Vicente",
      "Tecoluca"
    ]
  ];

  constructor() { }
}
