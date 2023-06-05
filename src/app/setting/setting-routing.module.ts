import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './setting.component';

const routes: Routes = [
  {
    path: 'customize',
    component: SettingComponent
  },
  // {
  //   path: 'logout',
  //   component: 
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
