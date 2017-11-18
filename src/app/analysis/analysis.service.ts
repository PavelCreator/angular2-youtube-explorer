import { Injectable } from '@angular/core';

@Injectable()
export class AnalysisService {

  pattern: RegExp = /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w-_]+)/;

  analyzeUrl(url: string): boolean {
    const result = this.pattern.test(url);
    return result;
  }

  parseUrl(url: string): string {
    const parseArr = url.match(this.pattern);
    const videoId = parseArr[1];
    return videoId;
  }
}
