import { Component, OnInit, ViewChild } from '@angular/core';
import { gasComponent } from './gasComponent';
import { ServerService } from '../../server.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { RangeModificationComponent } from './range-modification/range-modification.component';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.scss']
})
export class CustomizationComponent implements OnInit {

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
      this.gasComponents = res
    })
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(RangeModificationComponent, {
      data,
      height: '355px',
      width: '700px',
      position: {left:'450px', top:'-600px'}
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAlarmSettingsInfo();
        }
      },
    });
  }

}
