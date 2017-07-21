import {
  Component,
  OnInit
} from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'report-form',
  templateUrl: './report-form.component.html',
  styleUrls: [ './report-form.component.css' ],
})

export class ReportFormComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}

  public ngOnInit() {
    console.log('hello from ReportFormComponent');
  }
}
