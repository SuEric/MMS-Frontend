import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Report } from './report.model';

@Injectable()
export class ReportService {
  private reports: Report[] = [
    {
      id: '1',
      name: 'Report 1',
      date: new Date(2017, 5, 21),
    },
    {
      id: '2',
      name: 'Report 2',
      date: new Date(2017, 6, 22),
    },
    {
      id: '3',
      name: 'Report 3',
      date: new Date(2017, 6, 23),
    },
    {
      id: '4',
      name: 'Report 4',
      date: new Date(2017, 6, 24),
    },
    {
      id: '5',
      name: 'Report 5',
      date: new Date(2017, 6, 25),
    },
    {
      id: '1',
      name: 'Report 6',
      date: new Date(2017, 6, 26),
    },
    {
      id: '1',
      name: 'Report 7',
      date: new Date(2017, 6, 27),
    },
  ];

  constructor(private http: Http) {}

  public loadReports() {
    return [...this.reports];
  }
}
