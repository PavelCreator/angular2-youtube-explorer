import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private urlTypes: String[] = [
    'http://www.youtube.com/watch?v=6QjIHnb5Ivs',
    'https://www.youtube.com/watch?v=6QjIHnb5Ivs',
    'http://www.youtube.com/watch?v=6QjIHnb5Ivs&feature=related',
    'http://youtu.be/6QjIHnb5Ivs',
    'http://www.youtube.com/embed/watch?feature=player_embedded&v=6QjIHnb5Ivs',
    'http://www.youtube.com/embed/watch?v=6QjIHnb5Ivs',
    'http://www.youtube.com/embed/v=6QjIHnb5Ivs',
    'http://www.youtube.com/watch?feature=player_embedded&v=6QjIHnb5Ivs',
    'http://www.youtube.com/watch?v=6QjIHnb5Ivs',
    'www.youtube.com/watch?v=6QjIHnb5Ivs',
    'www.youtu.be/6QjIHnb5Ivs',
    'youtu.be/6QjIHnb5Ivs',
    'youtube.com/watch?v=6QjIHnb5Ivs',
    'http://www.youtube.com/watch/6QjIHnb5Ivs',
    'http://www.youtube.com/v/6QjIHnb5Ivs',
    'http://www.youtube.com/watch?v=6QjIHnb5Ivs&feature=related',
    'http://www.youtube.com/attribution_link?u=/watch?v=6QjIHnb5Ivs&feature=share&a=9QlmP1yvjcllp0h3l0NwuA',
    'http://www.youtube.com/attribution_link?a=fF1CWYwxCQ4&u=/watch?v=6QjIHnb5Ivs&feature=em-uploademail',
    'http://www.youtube.com/attribution_link?a=fF1CWYwxCQ4&feature=em-uploademail&u=/watch?v=6QjIHnb5Ivs'
  ]
  getUrlTypes(): String[] {
    return this.urlTypes;
  }
}
