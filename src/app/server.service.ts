import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  
  constructor(private http: HttpClient) {}

  dailyUpdate() {
    return this.http.get('http://localhost:4200/assets/fakedata.json')
    .pipe(map((result: any) => result))
  }

  dashboardUpdate() {
    return this.http.get('http://localhost:4200/assets/datalogger.json')
    .pipe(map((result: any) => result))
  }

  alarmSettingsUpdate() {
    return this.http.get('http://localhost:4200/assets/datalogger.json')
    .pipe(map((result: any) => result))
  }
}
