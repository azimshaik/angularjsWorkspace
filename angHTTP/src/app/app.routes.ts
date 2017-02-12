import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AboutComponent} from './components/about/about.component';
import{IndexComponent} from './components/index/index.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
        {path:'', component:IndexComponent },
        {path:'search', component:SearchComponent},
        {path:'about', component:AboutComponent}
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SearchComponent,
    AboutComponent
  ]
})
export class AppRoutingModule { }