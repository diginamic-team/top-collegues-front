import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { NouveauCollegue } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-collegue-reactive-form',
  templateUrl: './nouveau-collegue-reactive-form.component.html',
  styleUrls: ['./nouveau-collegue-reactive-form.component.css']
})
export class NouveauCollegueReactiveFormComponent implements OnInit {

  monForm: FormGroup ;
  nouveauCollegue: NouveauCollegue = {} ;
  erreur: string;

  constructor(private _fb: FormBuilder, private _service: DataService,private _router: Router) {

    this.monForm = this._fb.group({
          matricule: ['', [Validators.required]], // ajout d'une règle de validation
          pseudo: ['', [Validators.required, Validators.minLength(2)]],
          imageUrl: ''
    });

   }

  ngOnInit() {
  }

  get matricule() {
    return this.monForm.get('matricule');
  }

  get pseudo(){
    return this.monForm.get('pseudo');
  }

  valider() {
    this._service.creerCollegue(this.nouveauCollegue).subscribe(
      value => this._router.navigateByUrl('accueil'),/*this.enregistrer = 'Vous êtes enregistré.e !'*/
      error => this.erreur = error.error,
    );
  }
}
