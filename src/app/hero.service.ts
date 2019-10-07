import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MensajesService } from './mensajes.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private mensajesService: MensajesService) { }

  getHeroes(): Observable<Hero[]> {
    this.mensajesService.add('HeroService: heroes fetcheados');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    this.mensajesService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
