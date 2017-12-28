import { Injectable } from '@angular/core';

import { Hero } from './../../shared/models/hero';
import { HEROES } from './../../shared/mocks/mock-heros';
import { MessageService } from './../message/message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {
  constructor(private messageService: MessageService) { }

  getAllHeroes(): Promise<Hero[]> {
    this.messageService.add('HeroService: init hero!');
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero>{
    return this.getAllHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
