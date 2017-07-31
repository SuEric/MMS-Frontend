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

export class ReportFormComponent {
  constructor(public activeModal: NgbActiveModal) {}
}
