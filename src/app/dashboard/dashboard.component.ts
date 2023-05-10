import { Component } from '@angular/core';
import { dashboardInfo } from './dashboardInfo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  dashboardData : dashboardInfo[] = [{
    tag: '1HNE10CQ207',
    name: 'Flue gas H2O',
    setPoint: '0 ... 33',
    realtimeValue: '',
    unit: 'vol-%(wet)',
    designP: 'at stack'
  },
  {
    tag: '1HNE10CQ205',
    name: 'Flue gas HCl',
    setPoint: '0 ... 200',
    realtimeValue: '',
    unit: 'mg/Nm3(dry) 12 vol-% O2',
    designP: 'at stack'
  },
  {
    tag: '1HNE10CQ204',
    name: 'Flue gas SO2',
    setPoint: '0 ... 500',
    realtimeValue: '',
    unit: 'mg/Nm3(dry) 12 vol-% O2',
    designP: 'at stack'
  },
  {
    tag: '1HNE10CQ203',
    name: 'Flue gas NOx',
    setPoint: '0 ... 800',
    realtimeValue: '',
    unit: 'mg/Nm3(dry) 12 vol-% O2',
    designP: 'at stack'
  },
  {
    tag: '1HNE10CQ202',
    name: 'Flue gas CO',
    setPoint: '0 ... 700',
    realtimeValue: '',
    unit: 'mg/Nm3(dry) 12 vol-% O2',
    designP: 'at stack'
  },
  {
    tag: '1HNE10CQ201',
    name: 'Flue gas HO2',
    setPoint: '0 ... 21',
    realtimeValue: '',
    unit: 'vol-% O2',
    designP: 'at stack'
  },
  {
    tag: '1HNE10CQ206',
    name: 'Flue gas dust',
    setPoint: '0 ... 300',
    realtimeValue: '',
    unit: 'mg/Nm3(dry) 12 vol-% O2',
    designP: 'at stack'
  },
  {
    tag: '1HNE10CF201',
    name: 'Flue gas flow',
    setPoint: '0 ... 27',
    realtimeValue: '',
    unit: 'Nm3/s(wet)',
    designP: 'at stack'
  },
  {
    tag: '1HNE10CP201',
    name: 'Flue gas pressure',
    setPoint: '-500 ... 1000',
    realtimeValue: '',
    unit: 'Pa(g)',
    designP: 'at stack'
  },
  {
    tag: '1HNE10CT201',
    name: 'Flue gas temp.',
    setPoint: '0 ... 200',
    realtimeValue: '',
    unit: 'oC',
    designP: 'at stack'
  }]
  displayedColumns: string[] = ['tag', 'name', 'setPoint', 'realtimeValue','unit','designP'];
}
