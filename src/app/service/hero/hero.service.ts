import { Injectable } from '@angular/core';

import { Hero } from './../../shared/models/hero';
import { HEROES } from './../../shared/mocks/mock-heros';
import { MessageService } from './../message/message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {
  constructor(private messageService: MessageService) { }

  getAllHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero>{
    return of(HEROES.find(hero => hero.id === id ))
  }
}