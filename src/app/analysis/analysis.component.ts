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

    if (!this.videoLink){
      this.error = 'Please enter Youtube video URL';
      return;
    }

    if (this.cachedUrl && this.cachedUrl === this.videoLink){
      this.error = 'You entered the same URL';
      return;
    }

    this.cachedUrl = this.videoLink;
    this.showVideo = false;

    if (!this.analysisService.analyzeUrl(this.videoLink)){
      this.error = 'Invalid or unsupported link format';
      return;
    }
    const videoId = this.analysisService.parseUrl(this.videoLink);

    if (videoId) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videoId);
      this.showVideo = true;
    } else {
      this.error = 'Invalid video ID';
    }

  }
  ngOnInit(): void {
    this.urlTypes = this.dataService.getUrlTypes();
  }
}
