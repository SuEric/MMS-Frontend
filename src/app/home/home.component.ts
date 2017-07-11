import {
  Component,
  OnInit,
} from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';

@Component({
  selector: 'home',  // <home></home>
  providers: [
    Title
  ],
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  public displayedColumns = ['userName', 'userId'];
  public exampleDatabase = new ExampleDatabase();
  public localState = { value: '' };

  constructor(
    public appState: AppState,
    public title: Title
  ) {}

  public ngOnInit() {
    console.log('hello `Home` component');
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}

const NAMES = ['Report 1', 'Report 2', 'Report 3', 'Report 4', 'Report 5', 'Report 6', 'Report 7'];

export interface ReportData {
  id: string;
  name: string;
}

/* tslint:disable */

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<ReportData[]> = new BehaviorSubject<ReportData[]>([]);
  get data(): ReportData[] { return this.dataChange.value; }

  constructor() {
    for (let i = 0; i < 7; i++) { this.addReport(); }
  }

  /** Adds a new report to the database. */
  addReport() {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewReport());
    this.dataChange.next(copiedData);
  }

  /** Builds and returns a new Report. */
  private createNewReport() {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.xls';
    return {
      id: (this.data.length + 1).toString(),
      name: name,
    };
  }
}

/* tslint:enable */
