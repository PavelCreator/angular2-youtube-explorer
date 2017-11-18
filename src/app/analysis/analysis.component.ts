import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';

import { AnalysisService } from './analysis.service';
import { DataService } from '../services/data.service';

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
  urlTypes: String[];

  constructor(
    private sanitizer: DomSanitizer,
    private dataService: DataService,
    private analysisService: AnalysisService
  ) {}

  embed(): void {
    this.error = null;

    /*Step 1 - Validation*/
    if (!this.videoLink){
      this.error = 'Please enter Youtube video URL';
      return;
    }

    if (this.cachedUrl && this.cachedUrl === this.videoLink){
      this.error = 'You entered the same URL';
      return;
    }

    this.cachedUrl = this.videoLink; //cache video URL for preventing duplication query
    this.showVideo = false;

    /*Step 2 - Analysis*/
    if (!this.analysisService.analyzeUrl(this.videoLink)){
      this.error = 'Invalid or unsupported link format';
      return;
    }
    /*Step 3 - Parsing video ID*/
    const videoId = this.analysisService.parseUrl(this.videoLink);

    /*Step 4 - Show video in iframe*/
    if (videoId) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videoId);
      this.showVideo = true;
    } else {
      this.error = 'Invalid video ID';
    }

  }
  ngOnInit(): void {
    /*Get url types from service*/
    this.urlTypes = this.dataService.getUrlTypes();
  }
}
