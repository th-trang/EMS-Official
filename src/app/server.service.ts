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
}
