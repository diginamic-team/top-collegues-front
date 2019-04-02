import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let chaine: string;

    if (value >= 0) {
      chaine = `+ ${value}`
    } else if(value < 0) {
      chaine = `- ${Math.abs(value)}`
    }

    return chaine;
  }

}
