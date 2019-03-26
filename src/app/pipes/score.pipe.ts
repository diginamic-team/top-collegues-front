import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(scoreVal: number) {
    if (scoreVal > 0) {
      return ` + ${scoreVal}`;
    } else if (scoreVal < 0) {
      return ` ${scoreVal}`;
    }
  }

}
