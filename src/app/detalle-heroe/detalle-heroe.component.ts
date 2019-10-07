import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.component.html',
  styleUrls: ['./detalle-heroe.component.scss']
})


export class DetalleHeroeComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
