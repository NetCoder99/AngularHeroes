import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../classes/hero';
import { HEROES } from '../classes/mock-heroes';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor() { }
//  delay(ms: number) {
//    return new Promise( resolve => setTimeout(resolve, ms) );
//  }
  
  
  getHeroes(): Observable<Hero[]> {
    //this.delay(2000);
    console.log("service: getHeroes");
    return of(HEROES);
  }

  
  
}

