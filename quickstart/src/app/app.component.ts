import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1><h2>{{hero}} details!</h2>`,
})
//{{hero}} and {{title}} tells our app to read the title and hero properties from the component and render them---tthis so called "INTERPOLATION"
export class AppComponent  { 
	name = 'Angular'; 
	title= 'Tour of heroes';
	hero='Windstormmmmmmm!!!!';
}
