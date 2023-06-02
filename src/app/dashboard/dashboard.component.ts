import { Component, OnInit, ViewChild } from '@angular/core';
import { dashboardInfo } from './dashboardInfo';
import { ServerService } from '../server.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModifyDashboardComponent } from './modify-dashboard/modify-dashboard.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;

  public dashboardData: dashboardInfo[] = [];
  public displayColumns: string[] = ['tag', 'name', 'setPoint', 'realtimeValue', 'unit', 'designP', 'action'];
  dataSource!: MatTableDataSource<any>

  constructor(private data: ServerService, private _dialog: MatDialog) { }


  ngOnInit(): void {
    this.getDashboardInfo();
  }

  getDashboardInfo() {
    this.data.getData().subscribe(res => {
      this.dashboardData = res;
    })
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(ModifyDashboardComponent, {
      data,
      height: '355px',
      width: '700px',
      position: {left:'450px', top:'-600px'}
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getDashboardInfo();
        }
      },
    });
  }  
}
