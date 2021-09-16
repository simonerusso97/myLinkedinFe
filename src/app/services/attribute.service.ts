import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Attribute} from '../model/attribute';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }
  findAllAttribute(): Observable<Attribute[]> {
    return this.http.get<Attribute[]>('http://localhost:8080/attribute/findAllAttribute');
  }

  delete(attribute: Attribute): Observable<Attribute> {
    return this.http.delete<Attribute>('http://localhost:8080/attribute/deleteAttribute/' + attribute.id);
  }

  updateAttribute(attribute: Attribute): Observable<Attribute> {
    return this.http.patch<Attribute>('http://localhost:8080/attribute/updateAttribute', attribute);
  }
}
