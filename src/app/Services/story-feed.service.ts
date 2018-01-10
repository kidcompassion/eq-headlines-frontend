import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Story }           from '../Models/story';
import { Observable } from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()


export class StoryFeedService {
  edmontonjournalUrl: string = 'http://127.0.0.1:8000/ej-feed'; 
  
  constructor(private http:Http) { }
  

  getApp(){
    return this.http.get(this.edmontonjournalUrl)
    .map(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res:Response){
      
      let body = res.json();

      return body || {};
      

  }

  private handleError(error: Response | any){
      let errMsg: string;
      if (error instanceof Response){
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''}${err}`;
      } else {
          errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
  }
}
