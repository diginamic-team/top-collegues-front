import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

export class MonFormulaire { matricule: string; pseudo: string; score: number; imageURL: string; }

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})


export class NouveauCollegueTemplateFormComponent implements OnInit {
  error: string;
  monFormulaire: MonFormulaire = new MonFormulaire();

  constructor(private _dataSrv: DataService) { }

  ngOnInit() { }

  submit() {
    this._dataSrv.envoieBack(this.monFormulaire).subscribe(
      (data: MonFormulaire) => {
        this.monFormulaire = data;
      },
    error => {
      this.error = "Matricule non reconnu ou inexistant"
    },
      () => {

      });
  }
}

