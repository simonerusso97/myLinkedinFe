import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Regular} from '../models/regular';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  regularUserList: Regular[] = [];


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  getAllDisabledRegularUser(): Observable<Regular[]>{
    return this.http.get<Regular[]>('http://localhost:8080/user/getAllDisabledRegularUser');
  }

  acceptUsers(user: Regular): Observable<Regular> {
    user.disable = !user.disable;
    return this.http.post<Regular>('http://localhost:8080/user/acceptRegistrationRequest', user, this.httpOptions);
  }

  getUsers(): Observable<Regular[]> {
    return this.http.get<Regular[]>('http://localhost:8080/user/getAllRegular');
  }

  banUnban(user: Regular): Observable<Regular>{
    user.banned = !user.banned;
    return this.http.post<Regular>('http://localhost:8080/user/banUnbanRegularUser', user, this.httpOptions);
  }
}
