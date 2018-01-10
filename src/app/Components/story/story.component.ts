import { Component, Input } from '@angular/core';
import { Story } from '../../Models/story';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})

export class StoryComponent{
    @Input() 
    story: Story;
     
     ngOnInit() {
      }

      copyLink(val){
           console.log(this.story.link);
      }

      bookmarkStory(){
           console.log(this.story.bookmark);
      }

}