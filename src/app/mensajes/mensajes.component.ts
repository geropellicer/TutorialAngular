import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../mensajes.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent implements OnInit {

  constructor(public mensajesService: MensajesService) { }

  ngOnInit() {
  }

}
