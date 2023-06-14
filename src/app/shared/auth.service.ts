import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  isLogedIn = this._isLoggedIn$.asObservable()

  constructor(private server: ServerService) {}

  login(username: string, password: string) {
    
  }
}
