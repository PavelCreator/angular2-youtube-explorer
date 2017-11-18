import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { SearchService } from './search.service';

@Component({
  selector: 'my-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ]
})

export class SearchComponent implements OnInit {
  safeUrl: SafeResourceUrl;
  videoLink: string;
  showVideo: boolean = false;
  error: string;
  cachedUrl: string;

  constructor(
    private sanitizer: DomSanitizer,
    private searchService: SearchService
  ) {}

  embed(): void {
    console.log("videoLink =", this.videoLink);
    this.error = null;

    if (this.cachedUrl && this.cachedUrl === this.videoLink){
      this.error = 'You entered the same URL';
    }
    this.cachedUrl = this.videoLink;
    this.showVideo = false;


    if (this.searchService.analyzeUrl(this.videoLink) === null){
      this.error = 'Invalid or unsupported link format';
      return;
    }
    const videoId = this.searchService.parseUrl(this.videoLink);
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+videoId);

    console.log("this.safeUrl =", this.safeUrl);

    this.showVideo = true;
  }
  /*this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(videoURL);*/
  ngOnInit(): void {}
}
