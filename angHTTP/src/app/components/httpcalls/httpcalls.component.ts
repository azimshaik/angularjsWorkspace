import { Component } from '@angular/core';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Posts} from './posts';
@Injectable()

@Component({
  moduleId:module.id,
  selector: 'httpcalls',
  templateUrl: `httpcalls.component.html`,
})
export class HttpcallsComponent  { 
    onClickMe(){
        console.log("hit it hard");
        let serviceurl = 'https://jsonplaceholder.typicode.com/posts';
        console.log(serviceurl);
        
    }
}

// name = 'Angular'; 
//     private serviceurl = 'https://jsonplaceholder.typicode.com/posts';
//     constructor (private http:Http){}
//     getPosts():Observable<Posts[]>{
//         return this.http.get(this.serviceurl)
//                         .map(this.extractData)
//                         ;
//     }
//     private extractData(res: Response){
//         let body = res.json();
//         console.log(body);
//         return body.data || {};
//     }