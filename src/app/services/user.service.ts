import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Admin} from '../model/admin';
import {Regular} from '../model/regular';
import {Message} from "../model/message";

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

  getDisabledUsers(): Observable<Regular[]> {
    return this.http.get<Regular[]>('http://localhost:8080/user/getAllDisabledUser');
  }

  banUnban(user: Regular): Observable<Regular>{
    return this.http.patch<Regular>('http://localhost:8080/user/banUnban', user);
  }

  findMessageByUser(user: User): Observable<Message[]> {
    return this.http.get<Message[]>('http://localhost:8080/user/getAllMessage/'+user.id);
  }

  sendMessage(message: Message) {
    return this.http.post<Message>('http://localhost:8080/user/sendMessage', message, this.httpOptions);
  }

  getAllUsers() : Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/user/getAllUser');
  }

  getAllRegular() : Observable<Regular[]>{
    return this.http.get<Regular[]>('http://localhost:8080/user/getAllRegular');

  }
}
