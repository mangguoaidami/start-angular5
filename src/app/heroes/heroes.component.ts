import { Component, OnInit } from '@angular/core';

import { Hero } from './../shared/models/hero';
import { HEROES } from './../shared/mocks/mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // public hero:Hero = {
  //   id : 1,
  //   name : 'JastingBeber'
  // }
  public heroes: object[];
  public selectHero: Hero;
  public selectHero = {};

  constructor() {
    this.heroes = HEROES;
  }

  ngOnInit() {
    console.log(typeof this.heroes)
  }

  onSelect(hero): void{
    this.selectHero = hero;
  }

}
