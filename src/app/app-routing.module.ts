import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseComponent} from './course/course.component';
import {CourseUpdateComponent} from './course-update/course-update.component';
import {HomeComponent} from './home/home.component';
import{AboutComponent} from './about/about.component';
import{ContactUsComponent} from './contact-us/contact-us.component';
import{ DisplayCoursesComponent} from './display-courses/display-courses.component'


const routes: Routes = [{path: 'course' , component :CourseComponent},
{path: 'corUpdate/:id' , component :CourseUpdateComponent},
{path: 'home' , component :HomeComponent},
{path: 'courses' , component :DisplayCoursesComponent},
{path: 'about' , component :AboutComponent},
{path: 'contact' , component :ContactUsComponent},]
;

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
