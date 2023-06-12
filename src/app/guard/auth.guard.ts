import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServerService } from '../shared/server.service';
import { NotificationService } from '../shared/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private service: ServerService,
    private router: Router,
    private _noti: NotificationService
   ){}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.service.isLoggedIn()){
      console.log(this.service.isLoggedIn)
      return true;
    } else {
      this.router.navigate(['/login'])
      return false;
    }
  }
}

