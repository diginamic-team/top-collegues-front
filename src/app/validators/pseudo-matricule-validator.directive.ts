import { Directive } from '@angular/core';

import { Validator, NG_VALIDATORS, ValidationErrors, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appPseudoMatriculeValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PseudoMatriculeValidatorDirective, multi: true }]
})
export class PseudoMatriculeValidatorDirective implements Validator {


  validate(control: AbstractControl): ValidationErrors | null {

    console.log(control );
    if (control.value.matricule !== control.value.pseudo || control.value.pseudo == null || control.value.matricule == null){
      console.log('Ok');
      return null;

    }else {
      console.log('Nope');
      return {
        "errorIdentique": "Le pseudo et le matricule ne peuvent pas être identiques"};
      };
    }

  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Méthode non implémentée");
  }

  constructor() { }

}
