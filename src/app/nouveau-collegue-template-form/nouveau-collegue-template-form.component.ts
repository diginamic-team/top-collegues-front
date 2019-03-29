import { Component, OnInit, Input } from '@angular/core';
import { NouveauCollegue } from '../models';
import { CollegueComponent } from '../collegue/collegue.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {
  enregistrer: string;
  erreur: string;
  nouveauCollegue: NouveauCollegue = {} ;

  constructor(private _service: DataService, private _router: Router) { }

  ngOnInit() {

  }

  submit() {
    // console.log(this.collegue.matricule, this.collegue.pseudo, this.collegue.imageUrl) ;
    this._service.creerCollegue(this.nouveauCollegue).subscribe(
      value => this._router.navigateByUrl('accueil'),/*this.enregistrer = 'Vous êtes enregistré.e !'*/
      error => this.erreur = error.error,
    );

  }

  initMessageErreur() {
    this.enregistrer = '';
    this.erreur = '';
  }


}
