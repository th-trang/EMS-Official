import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  
  constructor(private http: HttpClient) {}

  dailyUpdate() {
    return this.http.get('http://localhost:3000/data')
    .pipe(map((result: any) => result))
  }

  getData(): Observable<any> {
    return this.http.get('http://localhost:3000/data')
  }

  updateData(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/data/${id}`, data);
  }

  addData(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/data', data)
  }
}
