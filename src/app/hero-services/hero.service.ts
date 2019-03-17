import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../classes/hero';
import { HEROES } from '../classes/mock-heroes';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) { }
//  delay(ms: number) {
//    return new Promise( resolve => setTimeout(resolve, ms) );
//  }
  
  
  getHeroes(): Observable<Hero[]> {
    //this.delay(2000);
    console.log("service: getHeroes");
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  
  
}

