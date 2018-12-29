import { Pipe, PipeTransform } from '@angular/core';
import {ICourse} from '../app/course/interface/ICourse'

@Pipe({
  name: 'cutomeCor',
  pure: false
})
export class CutomeCorPipe implements PipeTransform {
  bestItem = []
  arraysort
  transform(value: any, args?: any): any {
    console.log(value)
    
    
    for(let x of value){
      if(x >=3){
       this.arraysort = this.bestItem.sort()
        this.arraysort.slice(0,3);
        console.log(this.arraysort)
        
      }
      
      }
      return this.arraysort;
    }
    
    
    }
    
    // return (value.filter((item)=>item%2!=0 && item>5));
  


