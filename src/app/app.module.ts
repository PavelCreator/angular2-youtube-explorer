import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule }  from './app-routing.module';

import { AppComponent }        from './app.component';
import { AnalysisService }         from './analysis.service';
import { AnalysisComponent }         from './analysis.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AnalysisComponent
  ],
  providers: [
    AnalysisService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
