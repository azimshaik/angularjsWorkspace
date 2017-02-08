import { Component } from '@angular/core';

export class Hero{
	id: number;
	name:string;
}

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>`,
})
/**{{hero}} and {{title}} tells our app to read the title and hero properties from the component and render them---tthis so called "INTERPOLATION"*/

export class AppComponent  { 
	name = 'Angular'; 
	title= 'Tour of heroes';
	hero: Hero = {
	id:1,
	name:'Windstorm'
	}
}
