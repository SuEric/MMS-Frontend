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
    <nav class="navbar container-fluid">
      <div class="row">
        <div class="col-2">
          <img [src]="headerLogo">
        </div>
        <div class="left-nav col-6 text-center">
          <a class="navbar-brand"> {{ name }} </a>
        </div>
        <div class="right-nav col-4 text-right">
            <i class="material-icons">person</i>
            <i class="material-icons">notifications</i>
        </div>        
      </div>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer class="container-fluid">
      <div class="row">
        <div class="col-2">
          <img [src]="footerLogo">
        </div>
        <div class="col-10 text-center">
          <span class="footerTitle">{{ footer }}</span>
        </div>
      </div>
    </footer>
  `
})
export class AppComponent implements OnInit {
  public headerLogo = 'assets/img/bd-logo.png';
  public footerLogo = 'assets/img/bd-logo-white.png';
  public name = 'MMS Resource Automation Reports';
  public footer = '© 2017 BD. All rights reserved. \
    Unlessotherwisenoted, BD, the BD Logo and all other \
    trademarks are property of Becton, Dickinson and Company.';

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
