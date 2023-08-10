import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application } from '../model/application.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  private baseUrl = 'http://localhost:3000/application';
  constructor(private http: HttpClient) { }

  getApplication() {
    return this.http.get<Application[]>(`${this.baseUrl}`);
  }
}
