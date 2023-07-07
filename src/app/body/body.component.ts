import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  constructor(private route: ActivatedRoute) { }

  @Input() screenWidth = 0

  getBodyClass(): string {
    let snapshot: any = this.route.snapshot;
    if (~snapshot?._routerState?.url.search('login')) return 'login';
    if (this.screenWidth > 768) return 'body-trimmed'
    if (this.screenWidth <= 768 && this.screenWidth > 0) return 'body-md-screen';
    return '';
  }
}
