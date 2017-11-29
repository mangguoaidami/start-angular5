import { Injectable } from '@angular/core';

import { Hero } from './../shared/models/hero';
import { HEROES } from './../shared/mocks/mock-heros';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {
  constructor() { }

  getAllHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
