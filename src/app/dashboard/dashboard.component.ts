import { Component, OnInit } from '@angular/core';

import { Hero } from './../shared/models/hero';
import { HeroService } from './../service/hero/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getAllHeroes()
      .then(data => this.heroes = data.slice(1, 5));
  }

}
