import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  public heroes_service = [];

  @Input() hero: Hero;

  constructor( private _HeroService : HeroService) { }

  ngOnInit() {
    this.heroes_service = this._HeroService.getHeroes();
  }

}
