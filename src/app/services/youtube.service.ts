import { Http, Response }   from '@angular/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Injectable }       from '@angular/core';
import { Observable } from 'rxjs/Observable';

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_TOKEN = 'AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0';

@Injectable()
export class YouTubeService {
  constructor(
    private sanitizer: DomSanitizer,
    private http:Http
  ){}

  search(query: String): Observable<Object[]> {
    const ctxt = this;
    return this
      .http.get(`${SEARCH_URL}?q=${query}&part=snippet&key=${API_TOKEN}&maxResults=50`)
      .map((res: Response) => res.json())
      .map(json => {
        let items: Object[] = [];
        json.items.forEach(function (item: any) {
          if (item.id && item.id.kind === 'youtube#video') {
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
