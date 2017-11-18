import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/analysis" routerLinkActive="active">Analysis</a>
      <!--<a routerLink="/search" routerLinkActive="active">Search</a>-->
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Youtube Angular explorer';
}
