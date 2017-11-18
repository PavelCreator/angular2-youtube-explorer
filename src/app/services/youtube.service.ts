import { Http, Response }   from '@angular/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Injectable }       from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { EmptyObservable }  from 'rxjs/observable/EmptyObservable';
import 'rxjs/add/operator/map';

import { YouTubeVideo }  from '../interfaces/youtubevideo.interface';

/*Constants required to generate a query string for the Youtube API*/
const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_TOKEN = 'AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0';
const MAX_RESULTS = '50';

@Injectable()
export class YouTubeService {
  constructor(
    private sanitizer: DomSanitizer,
    private http:Http
  ){}

  /**
   * Requests Youtube API videos found by the search query
   * @param {string} query Search query entered by the user
   * @returns {Observable<Object[]>}
   */
  search(query: String): Observable<YouTubeVideo[]> {
    const ctxt = this;
    let items: YouTubeVideo[] = [];
    if (!query){
      /*if you send an empty query Youtube returns rating videos, we remove them from our output*/
      return new EmptyObservable();
    }
    return this.http.get(`${SEARCH_URL}?q=${query}&part=snippet&key=${API_TOKEN}&maxResults=${MAX_RESULTS}`)
      .map((res: Response) => res.json())
      .map(json => {
        json.items.forEach(function (item: YouTubeVideo) {
          /*in the search go to shuffle the videos and channels, we remove the channels from the output*/
          if (item.id && item.id.kind === 'youtube#video') {
            /*create safe URL for embed video iframe*/
            item.safeUrl = ctxt.sanitizer.bypassSecurityTrustResourceUrl(
              'https://www.youtube.com/embed/' + item.id.videoId
            );
            items.push(item);
          }
        });
        return items;
      });
  }
}
