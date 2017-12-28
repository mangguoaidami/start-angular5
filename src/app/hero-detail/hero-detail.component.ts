import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './../shared/models/hero';
import { HeroService } from './../service/hero/hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  @Input()  hero: Hero;
  // public hero: any;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.getHero();
  }

  getHero(){
    /**The math for get URL ID */
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.heroService.getHero(id)
    //   .then(data => this.hero = data);
    // this.route.paramMap
    //   .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    //   .subscribe( hero => this.hero = hero);
  };

  goBack(): void {
    this.location.back();
  }

}
