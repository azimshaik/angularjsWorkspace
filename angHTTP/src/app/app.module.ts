import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import{NavbarComponent} from './components/navbar/navbar.component';
import{AboutComponent} from './components/about/about.component';
import { AppRoutingModule } from './app.routes';
import {SearchComponent} from './components/search/search.component';
import {IndexComponent} from './components/index/index.component'
@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, NavbarComponent, AboutComponent, SearchComponent, IndexComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
