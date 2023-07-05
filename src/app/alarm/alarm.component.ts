import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from '../shared/server.service';
import { alarmData } from './alarmInfo';
import { TranslateService } from '@ngx-translate/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Data } from '../dashboard/dashboardInfo';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit{

  @ViewChild(MatSort) sort!: MatSort;

  filteredData: any;
  displayColumns: string[] = ['tag', 'name', 'time', 'realtimeValue', 'status']
  unfilteredData: any;
  dataSource!: MatTableDataSource<any>
  
  constructor(
    private data: ServerService,
    private translate: TranslateService
    ) {
      translate.setDefaultLang('vi');
      translate.use('vi');
     }

  ngOnInit(): void {
    this.getAlarmData();
    //this.compareValues();
  }

  getAlarmData() {
    this.data.getData().subscribe(res => {
      this.dataSource = new MatTableDataSource(res)
      this.dataSource.sort = this.sort
    })
  }

  useLanguage(language: string): void {
    this.translate.use(language);
}

  // compareValues() {
  //   this.data.getData().subscribe(res => {
  //     this.unfilteredData = res
      
  //     for (let i = 0; i < this.unfilteredData.length; i++) {
  //       let expectedValue = (this.unfilteredData[i].expectedValue)
  //       let realtimeValue = (this.unfilteredData[i].realtimeValue)
  //       let status: string;
  //       if (realtimeValue > expectedValue) {
  //         this.unfilteredData[i].status = "High"
  //       }
  //     }
  //   })
  // }

}
