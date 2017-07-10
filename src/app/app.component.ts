/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <md-toolbar color="primary">
      <img [src]="headerLogo">
      <span class="headerTitle">{{ name }}</span>
      <md-icon class="material-icons">notifications</md-icon>
      <md-icon class="material-icons">person</md-icon>
    </md-toolbar>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <img [src]="footerLogo">
      <span class="footerTitle">{{ footer }}</span>
    </footer>
  `
})
export class AppComponent implements OnInit {
  public headerLogo = 'assets/img/bd-logo.png';
  public footerLogo = 'assets/img/bd-logo-white.png';
  public name = 'MMS Resource Automation Reports';
  public footer = '© 2017 BD. All rights reserved. \
  Unless otherwise noted, BD, the BD Logo and all .';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
