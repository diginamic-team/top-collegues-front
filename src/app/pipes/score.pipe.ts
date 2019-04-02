import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(scoreVal: number, args?: any): any {
    if (scoreVal<0){
      return `- ${Math.abs(scoreVal)}`
    } else if (scoreVal>0){
      return `+ ${scoreVal}`}
      else{
        return 'Tu es comme les Suisses !!!'
      };    
  }
}
