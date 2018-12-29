import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../course.service';
import { ICourse } from '../course/interface/ICourse';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('fadIn' ,[
      transition('void=>*',[
        style({
          opacity:0,
          transform:'translateY(90px)'
        }),
        animate(1200,style({
          opacity:1,
          transform:'translateY(0)'

        }))
      ]),

    ]

    )
  ]
})
export class HomeComponent implements OnInit {
  @Input() bestList : ICourse[]
  // sortArray = []
  
  // sliceAarray 
  constructor(private listCor:CourseService) { }

  ngOnInit() {
    this.listCor.getCourse().subscribe(listCor => this.bestList = listCor);
    // this.sortArray = this.data.sort();
    // this.sliceAarray = this.sortArray.slice(0,2)
    // return  this.bestList.sort()
  }


}
