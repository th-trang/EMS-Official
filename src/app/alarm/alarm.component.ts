import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { alarmData } from './alarmInfo';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit{
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
