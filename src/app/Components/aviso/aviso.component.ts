import { Component, OnInit } from '@angular/core';
import {AvisosService} from 'src/app/Services/avisos.service'

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.scss']
})
export class AvisoComponent implements OnInit {

  constructor(private aviso:AvisosService) { }

  ngOnInit() {
  }

}
