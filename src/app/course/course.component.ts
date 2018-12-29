import { Component, OnInit,Input } from '@angular/core';
import {CourseService} from '../course.service'
import { ActivatedRoute, Router } from '@angular/router';
import {ICourse} from '../course/interface/ICourse';



import { FormGroup, FormControlName, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  
  @Input () arrayOfCourse : ICourse[];

  constructor(private course: CourseService, private route: ActivatedRoute, private router: Router) { }
   myForm ;
   cor : ICourse;
   submitted = false;
  ngOnInit() {
    // this.proService.getProdcuts().subscribe(pro => this.dataProduct=pro)
    this.course.getCourse().subscribe(elecourse => this.arrayOfCourse = elecourse);
  }
  

  btnAddcourse(myForm): void {
    
    this.course.addCourse(myForm.value as ICourse)
      .subscribe(res => {
        this.arrayOfCourse.push(res);
      });
  

  }
  
  btnDeleteCourse(id: ICourse){
    
    this.course.deleteCourse(id).subscribe(res=> this.router.navigate(['/course']));
  }

  btnUpdateCourse(id,myForm){
    this.course.updateCourse(id,myForm.value).subscribe(resup => {
      this.arrayOfCourse.push();

   })
}
  

}
