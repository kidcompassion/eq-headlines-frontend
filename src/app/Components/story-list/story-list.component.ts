import { Component, OnInit } from '@angular/core';
import {HttpModule} from '@angular/http';
import { StoryFeedService } from '../../Services/story-feed.service';

import 'rxjs/Rx';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
  providers: [StoryFeedService]
})

export class StoryListComponent implements OnInit {
  title = 'this works';
  storyData: any;
  errorMessage: any;

  
  
  constructor(private storyFeedService: StoryFeedService) { } 
  

  getApp(){
      this.storyFeedService
      .getApp()
      .subscribe(
              stories => this.storyData = stories,
              error => this.errorMessage = <any>error
          )

      
  }

  ngOnInit(){ 
      this.getApp();
      console.log(this);
      
   } 
}
