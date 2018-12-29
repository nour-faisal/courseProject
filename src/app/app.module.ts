import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseUpdateComponent } from './course-update/course-update.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {FormsModule} from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ShareDataComponent } from './share-data/share-data.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { DisplayCoursesComponent } from './display-courses/display-courses.component';
import { CutomeCorPipe } from './cutome-cor.pipe';
import { OwlModule } from 'ngx-owl-carousel';
import { TeacherComponent } from './teacher/teacher.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseUpdateComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    NavComponent,
    FooterComponent,
    ShareDataComponent,
    UploadImageComponent,
    DisplayCoursesComponent,
    CutomeCorPipe,
    TeacherComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    OwlModule,
    BrowserAnimationsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
