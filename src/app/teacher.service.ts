import { Injectable } from '@angular/core';
import {ITeacher} from 'src/app/ITeacher';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  techUrl = "http://localhost:3000/Teacher"
  constructor(private http: HttpClient) { }

  getTeach () :Observable<ITeacher[]>{
    return this.http.get<ITeacher[]>(this.techUrl);
  }

  getTeachById(id):Observable<ITeacher[]>{
    return this.http.get<ITeacher[]>(`${this.techUrl}/${id}`)
  }
  
}
