import { Component, OnInit, ViewChild } from '@angular/core';
import { dashboardInfo } from './dashboardInfo';
import { ServerService } from '../shared/server.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModifyDashboardComponent } from './modify-dashboard/modify-dashboard.component';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;

  public dashboardData: dashboardInfo[] = [];
  public displayColumns: string[] = ['tag', 'name', 'setPoint', 'realtimeValue', 'unit', 'designP', 'action'];
  dataSource!: MatTableDataSource<any>
  userRoleStatus!: string;

  constructor(
    private data: ServerService,
    private _dialog: MatDialog,
    private translate: TranslateService) {
      translate.setDefaultLang('vi');
      translate.use('vi');
  }


  ngOnInit(): void {
    this.getDashboardInfo();
  }



  getDashboardInfo() {
    this.data.getData().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.sort = this.sort
      },
      error: console.log
    })
  }


  openEditForm(data: any) {
    const dialogRef = this._dialog.open(ModifyDashboardComponent, {
      data,
      height: '450px',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getDashboardInfo();
        }
      },
    });
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
