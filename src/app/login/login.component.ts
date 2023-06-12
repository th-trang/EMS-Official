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
    if (this.loginForm.valid) {
      this.srv.loginUser(this.loginForm.value.username).subscribe(res => {
        this.userData = res
        if (this.loginForm.value.username.length > 1) {
          try {
            if (this.userData[0].password === this.loginForm.value.password) {
              sessionStorage.setItem('username', this.userData.username)
              sessionStorage.setItem('userrole', this.userData.role)
              this._noti.openSnackBar("Success!")
              this.router.navigate(['dashboard'])
            } else this._noti.openSnackBar("Wrong username or passowrd")
          } catch (error) {
            this._noti.openSnackBar("Wrong username or passowrd")
          }
        }
      })
    }
  }
}
