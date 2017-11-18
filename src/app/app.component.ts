import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `
    <h3 class="text-center">Youtube Angular explorer</h3>
    <h4 class="text-center">Written on Angular v4.3.6 by <a href="https://github.com/PavelCreator" target='_blank'>PavelCreator</a></h4>
    <nav class="text-center">
      Menu: 
      <a routerLink="/analysis" routerLinkActive="active">Analysis</a>
      <a routerLink="/search" routerLinkActive="active">Search</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
