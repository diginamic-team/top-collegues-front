import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appMatriculeValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: MatriculeValidatorDirective, multi: true}]
})
export class MatriculeValidatorDirective implements AsyncValidator {

  constructor() { }

  validate(control: AbstractControl): Observable<ValidationErrors> | null {
    // TODO implémenter la validation
    return null;
  }

}
