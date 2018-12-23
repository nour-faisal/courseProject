import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseComponent} from './course/course.component';
import {CourseUpdateComponent} from './course-update/course-update.component'

const routes: Routes = [{path: 'course' , component :CourseComponent},
{path: 'corUpdate/:id' , component :CourseUpdateComponent}]
;

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
