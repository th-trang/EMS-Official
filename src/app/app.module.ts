import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlarmComponent } from './alarm/alarm.component';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http'
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AlarmComponent,
    BodyComponent,
    DashboardComponent,
    SidenavComponent,
    SublevelMenuComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
