import { Injectable } from '@angular/core';
import {Structure} from '../model/structure';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StructureService {

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  findAllStructure(): Observable<Structure[]> {
    return this.http.get<Structure[]>('http://localhost:8080/structure/getAll');
  }

  delete(structure: Structure): Observable<Structure> {
    return this.http.delete<Structure>('http://localhost:8080/structure/delete/' + structure.id);

  }

  create(structure: Structure): Observable<Structure> {
    return this.http.post<Structure>('http://localhost:8080/structure/createStructure', structure, this.httpOptions);
  }

  update(structure: Structure): Observable<Structure> {
    console.log(structure);
    return this.http.patch<Structure>('http://localhost:8080/structure/update', structure, this.httpOptions);
  }
}
