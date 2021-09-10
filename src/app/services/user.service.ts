import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Admin} from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  login(admin: Admin): Observable<User> {
    return this.http.get<Admin>('http://localhost:8080/user/login/' + admin.email + '/' + admin.password);
  }
}
