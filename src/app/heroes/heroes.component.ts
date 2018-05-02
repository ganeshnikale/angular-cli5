import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

import { Hero } from '../hero';

import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes_service = [];

  heroes = HEROES;
 
  selectedHero: Hero;
 
 
  constructor( private _HeroService : HeroService ) { }
 
  ngOnInit() {
    this.heroes_service = this._HeroService.getHeroes();
  }
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
