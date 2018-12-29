import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service'
import { ICourse } from '../course/interface/ICourse';

@Component({
  selector: 'app-display-courses',
  templateUrl: './display-courses.component.html',
  styleUrls: ['./display-courses.component.css']
})
export class DisplayCoursesComponent implements OnInit {

  constructor(private allCourse :CourseService) { }
  listArray : ICourse[];
  ngOnInit() {
    this.allCourse.getCourse().subscribe(listCor => this.listArray = listCor);
  }

}
