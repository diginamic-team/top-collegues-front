import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {  Router } from '@angular/router';

export class MonFormulaire { matricule: string; pseudo: string; imageURL: string; }

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})


export class NouveauCollegueTemplateFormComponent implements OnInit {
  error: string;
  monFormulaire: MonFormulaire = new MonFormulaire();

  constructor(private _dataSrv: DataService, private router: Router) { }

  ngOnInit() { }

  submit() {
    this._dataSrv
    .insertNewCollegue(
      this.monFormulaire.matricule,
      this.monFormulaire.pseudo,
      this.monFormulaire.imageURL
    )
    .subscribe(
      () => {
        setTimeout(() => {
          this.router.navigate(['/accueil']);
        }, 1000);
      },

      );
  }
}

