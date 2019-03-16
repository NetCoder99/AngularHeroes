import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
//import { HEROES } from '../classes/mock-heroes';
import { HeroService } from '../hero-services/hero.service';
 
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
  heroes: Hero[];

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    console.log("onSelect");
    this.selectedHero = hero;
  }

  getHeroes(): void {
    console.log("component: getHeroes");
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
      }

  constructor(private heroService: HeroService) { 
    this.getHeroes();
    this.selectedHero = this.heroes[0];
  }
 
  ngOnInit() {
    //this.getHeroes();
  }
 
}