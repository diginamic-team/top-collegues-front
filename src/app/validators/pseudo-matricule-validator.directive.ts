import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, NG_VALIDATORS, Validators } from '@angular/forms';

@Directive({
  selector: '[appPseudoMatriculeValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PseudoMatriculeValidatorDirective, multi: true }]
})
export class PseudoMatriculeValidatorDirective implements Validators {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value.matricule === control.value.pseudo && control.value.matricule != null) {

      return { pseudoMatriculeIdentique: true };
    } else {
      return null;
    }
  }

}
