import { Component, OnInit } from '@angular/core';
import {TeacherService} from 'src/app/teacher.service'
import { ITeacher } from '../ITeacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  arrayTeach : ITeacher[]
  constructor(private teacher:TeacherService) { }

  ngOnInit() {
    this.teacher.getTeach().subscribe(itemTeah => this.arrayTeach = itemTeah);
  }

}
