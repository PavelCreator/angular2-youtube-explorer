import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { YouTubeVideo }  from '../interfaces/youtubevideo.interface';
import { YouTubeService } from '../services/youtube.service';

import 'rxjs/Rx';

@Component({
  selector: 'my-search',
  providers: [ YouTubeService ],
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ]
})

export class SearchComponent implements OnInit {
  search = new FormControl();
  results: Observable<YouTubeVideo[]>;

  constructor(public youtube: YouTubeService) {
    //observable of results
    this.results = this.search.valueChanges //input value change observable
      .debounceTime(200) //debounce for 200ms
      .switchMap(query => youtube.search(query));
    //switchMap aligns the asynchronous mode and cancels the pending request if a new value is requested
  }
  ngOnInit(): void {}
}
