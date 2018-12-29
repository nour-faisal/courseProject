import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ICourse} from '../app/course/interface/ICourse';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  courseUrl ='http://localhost:3000/Coursearray';

  constructor(private http: HttpClient) { }

  getCourse () :Observable<ICourse[]>{
    return this.http.get<ICourse[]>(this.courseUrl);
  }

  getCourseById(id):Observable<ICourse>{
    return this.http.get<ICourse>(`${this.courseUrl}/${id}`)
  }

   addCourse(obj: ICourse):Observable<ICourse> {
     console.log(obj);
     return this.http.post<ICourse>(this.courseUrl,obj);
   }
  deleteCourse(cor): Observable<ICourse[]>{
    const id = typeof cor === 'number' ? cor : cor.id;
    return this.http.delete<ICourse[]>(`${this.courseUrl}/${id}`)
  }

  updateCourse(id,courseItem:  ICourse):Observable<ICourse[]>{
    return this.http.put<ICourse[]>(`${this.courseUrl}/${id}`, courseItem)
  }
}
