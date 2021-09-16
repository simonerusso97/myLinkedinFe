import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../model/post';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  getAllPost(userType: string): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8080/post/findAllPost/' + userType);
  }

  changePostVisibility(post: Post): Observable<Post> {
    return this.http.patch<Post>('http://localhost:8080/post/changePostVisibility', post, this.httpOptions);
  }
}
