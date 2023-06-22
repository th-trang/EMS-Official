import { Component } from '@angular/core';
import { ServerService } from '../shared/server.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private srv: ServerService,
    private _fb: FormBuilder,
    private router: Router,
    private _noti: NotificationService
  ) { 
    sessionStorage.clear()
  }

  hide = true;
  userData: any;
  loginForm: any = this._fb.group({
    username: this._fb.control('', Validators.required),
    password: this._fb.control('', Validators.required)
  })

  loginUser() {
    this.srv.login(this.loginForm.value.username, this.loginForm.value.password).subscribe();
  }
}
