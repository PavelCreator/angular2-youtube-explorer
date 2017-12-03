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
  loading: boolean = false;
  results: YouTubeVideo[];

  constructor(public youtube: YouTubeService) {

    this.search.valueChanges            // input value change observable
      .debounceTime(200)                // debounce for 200ms
      .distinctUntilChanged()           // only emit when the current value is different than the last
      .switchMap((query: string) => {   // map to observable, complete previous inner observable, emit values
        if (query) {
          this.loading = true;          //add spinner
        }
        return youtube.search(query);
      })
      .subscribe(
        (searchResults) => {     // success handling
          this.results = searchResults; // show video-results
          this.loading = false;         // remove spinner
        }, (err: Error) => {
          console.log(err);             // error handling
        });
  }
  ngOnInit(): void {}
}
