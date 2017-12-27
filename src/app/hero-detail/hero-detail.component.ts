import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

import { Hero } from './../shared/models/hero';
import { HeroService } from './../service/hero/hero.service';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()  hero: Hero;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .then(data => this.hero = data);
  }

  goBack(): void {
    this.location.back();
  }

}
