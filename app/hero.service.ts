import {Injectable} from 'angular2/core';
import {HEROES_LIST} from './mock-heroes';
import {Hero} from './hero';

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES_LIST);
  }

  getHeroesSlowly(){
    return new Promise<Hero[]>(
      resolve => setTimeout(() => resolve(HEROES_LIST),  5000)
    );
  }
}
