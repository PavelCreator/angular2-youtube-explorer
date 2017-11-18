import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule }  from './app-routing.module';

import { AppComponent }        from './app.component';

import { DataService }         from './services/data.service';

import { AnalysisService }         from './analysis/analysis.service';
import { SearchService }         from './search/search.service';

import { AnalysisComponent }         from './analysis/analysis.component';
import { SearchComponent }         from './search/search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AnalysisComponent,
    SearchComponent
  ],
  providers: [
    DataService,
    AnalysisService,
    SearchService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
