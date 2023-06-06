import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServerService } from '../server.service';
import { gasComponent } from './gasComponent';
import { RangeModificationComponent } from './range-modification/range-modification.component';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;

  public gasComponents: gasComponent[] = []
  public displayColumns: string[] = ['tag', 'name', 'upperbound', 'lowerbound', 'action']
  dataSource!: MatTableDataSource<any>

  constructor(private data: ServerService, private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAlarmSettingsInfo()
  }

  getAlarmSettingsInfo() {
    this.data.getData().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.sort = this.sort
      },
      error: console.log
    })
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(RangeModificationComponent, {
      data,
      height: '370px',
      width: '450px',
    });
    dialogRef.afterClosed().subscribe({
      next: (val: any) => {
        if (val) {
          this.getAlarmSettingsInfo;
        }
      },
    });
  }

}
