import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs"
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  
  constructor(private noti: NotificationService) {}

  handleError<T>(operation = "operation", result?:T) {
    return (error: any): Observable<T> => {
      this.noti.openSnackBar("Sai mật khẩu hoặc tên người dùng")
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T)
    }
  }
}
