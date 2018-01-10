import { TestBed, inject } from '@angular/core/testing';

import { StoryFeedService } from './story-feed.service';

describe('StoryFeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoryFeedService]
    });
  });

  it('should be created', inject([StoryFeedService], (service: StoryFeedService) => {
    expect(service).toBeTruthy();
  }));
});
