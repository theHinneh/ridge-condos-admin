/** @format */

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';
  // date = '15th September, 2020';
  response = [];

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private readonly apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getRooms().subscribe(res => {
      this.response.push(res);
      for (const resp of res as any) {
        this.response.push(resp);
      }
    });
    console.log(this.response);
  }
}
