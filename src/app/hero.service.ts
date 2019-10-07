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
}
