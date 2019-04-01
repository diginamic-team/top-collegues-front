import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, NG_VALIDATORS, Validators } from '@angular/forms';

@Directive({
  selector: '[appPseudoMatriculeValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: PseudoMatriculeValidatorDirective, multi: true}]

})
export class PseudoMatriculeValidatorDirective implements Validators {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    // TODO écrire la règle de validation
    // En cas de règle respecté (matricule != pseudo), retourner null
    // Sinon retourner l'objet { pseudoMatriculeIdentique : true }


    if (control.value.matricule === control.value.pseudo && control.value.matricule != null) {

      return { pseudoMatriculeIdentique: true };
    } else {
      return null;
    }
  }

}
