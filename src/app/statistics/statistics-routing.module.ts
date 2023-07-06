import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsListComponent } from './statistics-list/statistics-list.component';
import { AuthGuard } from '../shared/auth.guard';

const routes: Routes = [
  {
    path: 'all gas',
    component: StatisticsListComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
