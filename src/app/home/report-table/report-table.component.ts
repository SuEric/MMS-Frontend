import {
  Component,
  Input,
} from '@angular/core';

import * as format from 'date-fns/format';

import { Report } from '../../shared';

@Component({
  selector: 'report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css'],
})

export class ReportTableComponent {
  @Input() public reports: Report[];

  public formatDate(date: Date, dateFormat: string) {
    return format(date, dateFormat);
  }
}
