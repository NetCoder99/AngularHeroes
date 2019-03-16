import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { HEROES } from '../classes/mock-heroes';
 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    race: "Ork"

  };
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor() { 
    this.selectedHero = this.heroes[0];
  }
 
  ngOnInit() {
  }
 
}