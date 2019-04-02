import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PseudoMatriculeValidatorDirective } from '../validators/pseudo-matricule-validator.directive';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  monForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.monForm = this.fb.group(
      {
        matricule: ['', [Validators.required]],
        pseudo: ['', [Validators.required , Validators.minLength(3)]],
        image: ['', []]
      },
      {
        validators: [PseudoMatriculeValidatorDirective],
      }
    );
  }

  ngOnInit() {
  }

}
