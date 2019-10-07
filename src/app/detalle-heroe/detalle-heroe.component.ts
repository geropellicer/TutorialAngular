import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.component.html',
  styleUrls: ['./detalle-heroe.component.scss']
})


export class DetalleHeroeComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(
      hero => this.hero = hero
    );
  }

  goBack(): void {
    this.location.back();
  }
}
