import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { StoryFeedService }           from './story-feed.service';
import { Story }           from '../Models/story';

import { Observable } from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()


export class EjService{
  feedUrl: string = 'http://edmontonjournal.com/feed/'; 
  
  constructor(private http:Http, private userService: StoryFeedService) { }
 
}
