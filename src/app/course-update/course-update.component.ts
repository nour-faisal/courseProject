import { Component, OnInit, Input } from '@angular/core';
import {CourseService} from '../course.service'
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common'
import {ICourse} from '../course/interface/ICourse'

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent implements OnInit {
  @Input() cor : ICourse;
  arrayCor = []
  corObj ={}
  constructor(private courses:CourseService,private route:ActivatedRoute, private location:Location) { }
  
  ngOnInit() {
    this.getCourse();
  }
  getCourse(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.courses.getCourseById(id).subscribe(cor => this.cor = cor);
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.courses.updateCourse(this.cor)
      .subscribe(() => this.goBack());
  }

}
