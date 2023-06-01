import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomizationComponent } from './settings-list/customization.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: 'customize',
    component: CustomizationComponent
  },
  {
    path: 'logout',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
