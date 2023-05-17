import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './navbarData';
import { INavbarData } from './helper';
import { Router } from '@angular/router';

interface SideNavToggle {
  screenWidth: number
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})

export class SidenavComponent  implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768) {
      this.onToggleSideNav.emit({ screenWidth: this.screenWidth});
    }
  }

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  handleClick(item: INavbarData): void {
   this.shrinkItems(item)
    item.expanded = !item.expanded
  }


  getActiveClass(data: INavbarData): string {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  shrinkItems(item: INavbarData): void {
    if (!this.multiple) {
      for(let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }
}