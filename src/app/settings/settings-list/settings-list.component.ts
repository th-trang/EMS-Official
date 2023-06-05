import { Component, OnInit, ViewChild } from '@angular/core';
import { gasComponent } from './gasComponent';
import { ServerService } from '../../server.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RangeModificationComponent } from './range-modification/range-modification.component';

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss']
})
export class SettingsListComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;

  public gasComponents: gasComponent[] = []
  public displayColumns: string[] = ['tag','name', 'upperbound', 'lowerbound']
  dataSource!: MatTableDataSource<any>

  constructor(private data: ServerService, private _dialog: MatDialog) {}
  
  ngOnInit(): void {
    this.getAlarmSettingsInfo()
  }

  getAlarmSettingsInfo() {
    this.data.getData().subscribe(res => {
      this.dataSource = res
    })
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(RangeModificationComponent, {
      data,
      height: '400px',
      width: '700px',
      position: {left:'450px', top:'-600px'}
    });

    dialogRef.afterClosed().subscribe({
      next: (val: any) => {
        if (val) {
          this.getAlarmSettingsInfo();
        }
      },
    });
  }
}
