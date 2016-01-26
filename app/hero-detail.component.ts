import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
  selector: 'hero-detail-cmp',
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} Details!</h2>
    <div><label>Id:</label> {{hero.id}}</div>
    <div>
      <label>Name:</label>
      <input [(ngModel)]="hero.name" placeholder="Hero Name"/>
    </div>
  </div>
  `,
  inputs: ['hero']
})

export class HeroDetailComponent {
  public hero : Hero;
}
