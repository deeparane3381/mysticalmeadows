/**
 * @Date:   2018-12-25T01:51:16+05:30
 * @Last modified time: 2018-12-30T17:44:06+05:30
 */



import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- header -->
    <app-header></app-header>

    <!-- routes will be rendered here -->
    <router-outlet></router-outlet>

    <!-- footer -->
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mystical-meadows';
}
