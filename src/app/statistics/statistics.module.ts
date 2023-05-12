import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsListComponent } from './statistics-list/statistics-list.component';


@NgModule({
  declarations: [    
    StatisticsComponent, StatisticsListComponent,
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule { }
