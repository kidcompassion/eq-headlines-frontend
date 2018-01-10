import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { StoryFeedService } from './Services/story-feed.service';
import { EjService } from './Services/ej-feed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StoryFeedService]
})
export class AppComponent {
  value: string = 'hi';
  title = 'app';
}
