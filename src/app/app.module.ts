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
import { NavComponent } from './nav/nav.component'

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseUpdateComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
