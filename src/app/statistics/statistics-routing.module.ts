import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsListComponent } from './statistics-list/statistics-list.component';

const routes: Routes = [
  {
    path: 'flue gas H2O',
    component: StatisticsListComponent
  },
  {
    path: 'flue gas HCl',
    component: StatisticsListComponent
  },
  {
    path: 'flue gas SO2',
    component: StatisticsListComponent
  },
  {
    path: 'flue gas NOx',
    component: StatisticsListComponent
  },
  {
    path: 'flue gas CO',
    component: StatisticsListComponent
  },
  {
    path: 'flue gas O2',
    component: StatisticsListComponent
  },
  {
    path: 'flue gas dust',
    component: StatisticsListComponent
  },
  {
    path: 'flue gas flow',
    component: StatisticsListComponent
  },
  {
    path: 'flue gas pressure',
    component: StatisticsListComponent
  },
  {
    path: 'flue gas temperature',
    component: StatisticsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
