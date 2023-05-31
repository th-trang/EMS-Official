import { Component, OnInit } from '@angular/core';
import { dashboardInfo } from './dashboardInfo';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  constructor(private data: ServerService) { }

  public dashboardData: dashboardInfo[] = [];

  public displayColumns: string[] = ['tag', 'name', 'setPoint', 'realtimeValue', 'unit', 'designP'];

  ngOnInit(): void {
    this.data.dashboardUpdate().subscribe(res => {
      this.dashboardData = res;
    })
  }

  onSave(event: any) {

  }
}
