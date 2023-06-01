import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

  dailyUpdate() {
    return this.http.get('http://localhost:4200/assets/fakedata.json')
    .pipe(map((result: any) => result))
  }

  getData() {
    return this.http.get('http://localhost:4200/assets/datalogger.json')
    .pipe(map((result: any) => result))
  }

  updateData(tag: string, data:any) {
    return this.http.put(`http://localhost:4200/assets/datalogger.json/${tag}`, data);
  }

  alarmSettingsUpdate() {
    return this.http.get('http://localhost:4200/assets/datalogger.json')
    .pipe(map((result: any) => result))
  }


  openSnackBar(message: string, action: string = 'ok') {
    this._snackBar.open(message, action, {
      duration: 1000,
      verticalPosition: 'top',
    });
  }
}
