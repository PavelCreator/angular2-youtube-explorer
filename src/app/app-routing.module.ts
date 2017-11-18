import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnalysisComponent }   from './analysis/analysis.component';
import { SearchComponent }   from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/analysis', pathMatch: 'full' },
  { path: 'analysis',  component: AnalysisComponent },
  { path: 'search',  component: SearchComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
