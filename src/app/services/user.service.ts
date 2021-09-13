import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Admin} from '../model/admin';
import {Regular} from '../model/regular';

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

  findAllRegistrationRequest(): Observable<Regular[]> {
    return this.http.get<Regular[]>('http://localhost:8080/user/findAllRegistrationRequest');
  }

  acceptUsers(user: Regular): Observable<Regular[]> {
    return this.http.patch<Regular[]>('http://localhost:8080/user/acceptUser', user);
  }

  getUsers(): Observable<Regular[]> {
    return this.http.get<Regular[]>('http://localhost:8080/user/getAllUser');
  }

  banUnban(user: Regular): Observable<Regular>{
    return this.http.patch<Regular>('http://localhost:8080/user/banUnban', user);
  }
}
