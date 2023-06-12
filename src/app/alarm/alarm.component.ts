import { Component, OnInit } from '@angular/core';
import { ServerService } from '../shared/server.service';
import { alarmData } from './alarmInfo';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit{
  filteredData: any;
  displayColumns: string[] = ['tag', 'name', 'status', 'dt', 'realtimeValue']
  unfilteredData: alarmData[] = []
  constructor(private data: ServerService) { }

  ngOnInit(): void {
    this.getAlarmData();
  }

  getAlarmData() {
    this.data.getData().subscribe(res => {
      this.unfilteredData = res
      this.filteredData = this.unfilteredData.filter((item) => item.status === 'High')
    })
  }


}
