import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UpdateButtonComponent } from './Components/update-button/update-button.component';
import { StoryComponent } from './Components/story/story.component';
import { StoryListComponent } from './Components/story-list/story-list.component';
import { StoryFeedService } from './Services/story-feed.service';
import { EjService } from './Services/ej-feed.service';

/*
const appRoutes: Routes = [
  { path: 'edmonton-journal', component: StoryListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

*/


@NgModule({
  declarations: [
    AppComponent,
    UpdateButtonComponent,
    StoryComponent,
    StoryListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [StoryFeedService, EjService],
  bootstrap: [AppComponent]
})
export class AppModule { }
