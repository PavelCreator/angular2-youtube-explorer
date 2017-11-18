import { Injectable } from '@angular/core';

@Injectable()
export class AnalysisService {

  /*The pattern supports 19 types of Youtube video links*/
  pattern: RegExp = /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w-_]+)/;

  /**
   * Checks if the URL satisfies the Youtube video pattern
   * @param {string} url User-Entered URL
   * @returns {boolean}
   */
  analyzeUrl(url: string): boolean {
    const result = this.pattern.test(url);
    return result;
  }

  /**
   * Searches for the video ID in the user-entered string
   * @param {string} url User-Entered URL
   * @returns {string} videoId Id of the requested video
   */
  parseUrl(url: string): string {
    const parseArr = url.match(this.pattern);
    const videoId = parseArr[1];
    return videoId;
  }
}
