import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './setting.component';
import { AuthGuard } from '../shared/auth.guard';

const routes: Routes = [
  {
    path: 'customize',
    component: SettingComponent, canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
