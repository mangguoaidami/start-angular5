import { Component, OnInit } from '@angular/core';

import { Hero } from './../shared/models/hero';
// import { HEROES } from './../shared/mocks/mock-heros';
import { HeroService } from './../service/hero/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes: object[];
  public selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getAllHeroes()
      .then(data => this.heroes = data);
  }

  onSelect(hero): void{
    this.selectedHero = hero;
  }
}
