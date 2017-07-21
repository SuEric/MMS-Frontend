import {
  Component,
  OnInit,
} from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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

@Component({
  selector: 'home',  // <home></home>
  providers: [
    Title
  ],
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  public displayedColumns = ['userName', 'userId'];
  public localState = { value: '' };
  public closeResult: string;
  public reports: Report[];

  constructor(
    private modalService: NgbModal,
    private reportService: ReportService,
    public appState: AppState,
    public title: Title
  ) {}

  public ngOnInit() {
    this.reports = this.reportService.loadReports();
  }

  public open() {
    const modalRef = this.modalService.open(ReportFormComponent);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
