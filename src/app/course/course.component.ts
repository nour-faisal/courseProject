import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service'
import {ICourse} from '../course/interface/ICourse';

import { Identifiers } from '@angular/compiler';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  cor : ICourse;
  arrayOfCourse : ICourse[];

  constructor(private course: CourseService) { }

  ngOnInit() {
    // this.proService.getProdcuts().subscribe(pro => this.dataProduct=pro)
    this.course.getCourse().subscribe(elecourse => this.arrayOfCourse = elecourse);
  }
  nameErrors = null;

  btnAddcourse(myForm): void {
    
    this.course.addCourse(myForm.value as ICourse)
      .subscribe(res => {
        this.arrayOfCourse.push(res);
      });
  

  }
  
  btnDeleteCourse(cor: ICourse){
    
    this.course.deleteCourse(cor).subscribe(res=>this.course.getCourse());
  }
  

}
