import { Component, OnInit } from '@angular/core';
import { gasComponentDetails } from './gasComponent';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss']
})
export class SettingsListComponent implements OnInit {

  constructor(private data: ServerService) {}
  
  ngOnInit(): void {
    this.data.alarmSettingsUpdate().subscribe(res => {
      let tag = res.map((res:any) => res.tag)
      let name = res.map((res:any) => res.name)
      let upperbound = res.map((res:any) => res.upperbound)
      let lowerbound = res.map((res:any) => res.lowerbound)

      console.log(tag, name, upperbound, lowerbound)
    })
  }

  gasComponent: gasComponentDetails[] = [
    {
      tag: '1HNE10CQ207',
      name: 'Flue gas H2O',
      upperbound: '',
      lowerbound: '',
    },
    {
      tag: '1HNE10CQ205',
      name: 'Flue gas HCl',
      upperbound: '',
      lowerbound: '',
    },
    {
      tag: '1HNE10CQ204',
      name: 'Flue gas SO2',
      upperbound: '',
      lowerbound: '',
    },
    {
      tag: '1HNE10CQ203',
      name: 'Flue gas NOx',
      upperbound: '',
      lowerbound: '',
    },
    {
      tag: '1HNE10CQ202',
      name: 'Flue gas CO',
      upperbound: '',
      lowerbound: '',
    },
    {
      tag: '1HNE10CQ201',
      name: 'Flue gas O2',
      upperbound: '',
      lowerbound: '',
    },
    {
      tag: '1HNE10CQ206',
      name: 'Flue gas dust',
      upperbound: '',
      lowerbound: '',
    },
    {
      tag: '1HNE10CF201',
      name: 'Flue gas flow',
      upperbound: '',
      lowerbound: '',
    },
    {
      tag: '1HNE10CP201',
      name: 'Flue gas pressure',
      upperbound: '',
      lowerbound: '',
    },
    {
      tag: '1HNE10CT201',
      name: 'Flue gas temperature',
      upperbound: '',
      lowerbound: '',
    }]

  displayGasComponent: string[] = ['tag', 'name', 'upperbound', 'lowerbound']
  upperbound: string = '0';
  lowerbound: string = '0';

  onUpdate(event: any) {
    this.upperbound = (<HTMLInputElement>event.target).value;
    this.lowerbound = (<HTMLInputElement>event.target).value;
  }
}
