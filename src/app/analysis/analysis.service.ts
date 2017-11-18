import { Injectable } from '@angular/core';

@Injectable()
export class AnalysisService {
  analyzeUrl(url: string): boolean {
    const result = /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w-_]+)/.test(url);
    return result;
  }
  parseUrl(url: string): string {
    const parseArr = url.match( /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w-_]+)/ );
    const videoId = parseArr[1];
    return videoId;
  }
}
