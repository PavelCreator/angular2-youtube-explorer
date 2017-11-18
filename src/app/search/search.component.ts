import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

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
  results: Observable<any>;

  constructor(public youtube: YouTubeService) {

    //observable of results
    this.results =
      //input value change observable
      this.search.valueChanges
        .debounceTime(200) //debounce for 200ms
        .switchMap(query => youtube.search(query));

    //switchMap flattens the async and cancels the pending request if a new value is requested
  }
  ngOnInit(): void {}
}
