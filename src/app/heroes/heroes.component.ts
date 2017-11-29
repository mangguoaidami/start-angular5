import { Component, OnInit } from '@angular/core';

import { Hero } from './../shared/models/hero';
import { HEROES } from './../shared/mocks/mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes: object[];
  public selectedHero: Hero;

  constructor() {
    this.heroes = HEROES;
  }

  ngOnInit() {
    // console.log(typeof this.heroes);  //object
  }

  onSelect(hero): void{
    this.selectedHero = hero;
  }
}
