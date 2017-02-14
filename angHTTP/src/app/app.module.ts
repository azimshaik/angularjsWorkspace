import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import{NavbarComponent} from './components/navbar/navbar.component';
import{AboutComponent} from './components/about/about.component';
import { AppRoutingModule } from './app.routes';
import {SearchComponent} from './components/search/search.component';
import {IndexComponent} from './components/index/index.component'
import {HttpModule} from '@angular/http';
import {HttpcallsComponent} from './components/httpcalls/httpcalls.component';
@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule ],
  declarations: [ AppComponent, NavbarComponent, AboutComponent, SearchComponent, IndexComponent,HttpcallsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
