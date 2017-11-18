import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }          from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }           from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';

import { DataService }          from './services/data.service';
import { YouTubeService }       from './services/youtube.service';

import { AnalysisService }      from './analysis/analysis.service';
import { SearchService }        from './search/search.service';

import { AnalysisComponent }    from './analysis/analysis.component';
import { SearchComponent }      from './search/search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    AnalysisComponent,
    SearchComponent
  ],
  providers: [
    DataService,
    YouTubeService,
    AnalysisService,
    SearchService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
