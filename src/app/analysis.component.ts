import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { AnalysisService } from './analysis.service';

@Component({
  selector: 'my-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: [ './analysis.component.css' ]
})

export class AnalysisComponent implements OnInit {
  safeUrl: SafeResourceUrl;
  videoLink: string;
  showVideo: boolean = false;
  error: string;
  cachedUrl: string;

  constructor(
    private sanitizer: DomSanitizer,
    private analysisService: AnalysisService
  ) {}

  embed(): void {
    console.log("videoLink =", this.videoLink);
    this.error = null;

    if (this.cachedUrl && this.cachedUrl === this.videoLink){
      this.error = 'You entered the same URL';
    }
    this.cachedUrl = this.videoLink;
    this.showVideo = false;


    if (this.analysisService.analyzeUrl(this.videoLink) === null){
      this.error = 'Invalid or unsupported link format';
      return;
    }
    const videoId = this.analysisService.parseUrl(this.videoLink);
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+videoId);

    console.log("this.safeUrl =", this.safeUrl);

    this.showVideo = true;
  }
  /*this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(videoURL);*/
  ngOnInit(): void {}
}
