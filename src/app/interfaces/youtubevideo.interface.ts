import { SafeResourceUrl } from '@angular/platform-browser';

/*Unit video from the Youtube search query*/
export interface YouTubeVideo {
    id: {
      videoId: string,
      kind: string
    };
    safeUrl: SafeResourceUrl;
}
