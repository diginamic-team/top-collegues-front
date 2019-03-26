import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let resultat = '';
    if(value > 0){
      resultat ="+ " + value;
    }
    if (value < 0){
      resultat ="- " + value;
    }
    return resultat;
  }

}
