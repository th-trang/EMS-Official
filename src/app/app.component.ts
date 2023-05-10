import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'EmissionMonitoringSystem';
  
  constructor(private service : ServerService) {}

  ngOnInit() {
    this.getDataFromApi
  }

  getDataFromApi() {
    this.service.getData().subscribe((response) => {
      console.log ('Response from API is ', response)
    }, (error) => {
      console.log('Error is ', error)
    })
    ;
  }
  
  isSideNavCollapsed = false
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle) {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
