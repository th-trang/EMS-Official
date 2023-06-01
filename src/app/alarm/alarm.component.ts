import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from '../server.service';
import { alarmData } from './alarmInfo';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit {



  alarmData: alarmData[] = [];
  displayColumns: string[] = ['tag', 'name', 'status', 'dt', 'realtimeValue']

  constructor(private data: ServerService) { }

  ngOnInit(): void {
    this.getAlarmData();
  }

  getAlarmData() {
    this.data.getData().subscribe(res => {

    })
  }

}
