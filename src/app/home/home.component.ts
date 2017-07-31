import {
  Component,
  OnInit,
} from '@angular/core';

import { NgbModal, NgbActiveModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import isBefore from 'date-fns/is_before';

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

import { ReportTableComponent } from './report-table';
import { ReportFormComponent } from './report-form';

import { Report, ReportService } from '../shared';

const now = new Date();

@Component({
  selector: 'home',  // <home></home>
  providers: [
    Title
  ],
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  public localState = { value: '' };
  public reports: Report[];
  public filteredReports: Report[];

  // date picker
  public date: NgbDateStruct;

  constructor(
    private modalService: NgbModal,
    private reportService: ReportService,
    public appState: AppState,
    public title: Title
  ) {}

  public ngOnInit() {
    this.reports = this.reportService.loadReports()
      .sort((repA, repB) => +repB.date - +repA.date);
    this.date = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  public open() {
    const modalRef = this.modalService.open(ReportFormComponent);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

  public todayReports() {
    this.date = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  public filterReports() {
    const selectedDate = new Date(this.date.year, this.date.month - 1, this.date.day + 1);
    this.filteredReports =  this.reports.filter((report) => isBefore(report.date, selectedDate));
  }
}
