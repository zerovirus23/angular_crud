import {Component} from 'angular2/core';

interface Hero{
  id : number;
  name : string;
}

@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <h2>{{hero.name}} Details!</h2>
      <div><label>Id:</label> {{hero.id}}</div>
      <div>
        <label>Name:</label>
        <input [(ngModel)]="hero.name" placeholder="Hero Name"/>
      </div>
    `
})


export class AppComponent {
  public title = 'Hello CRUD';
  public hero : Hero = {
    id : 1,
    name : 'Hernán'
  };
}
