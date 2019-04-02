import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'historique'
})
export class HistoriquePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let chaine: string;

    if (value === 0) {
      chaine = ` est aimé.e, elle/il a désormais un score de `;
    } else if(value === 1) {
      chaine = ` est détesté.e, elle/il a désormais un score de `;
    }

    return chaine;
  }

}
