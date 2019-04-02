import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../model';
import { listeCollegues } from '../mock';

@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.css']
})
export class AccueilComponentComponent implements OnInit {

  liste: Collegue[] = [];
  err = false;
  message: string;
  type: string;

  constructor(private _dataSrv: DataService) { }

  ngOnInit() {
    this._dataSrv.lister().subscribe
    (liste => this.liste = liste,
      () => {this.type = 'warning',
              this.message = `Fail de la récup des données`,
                this.err = true;
              });
  }

  rafraichir() {
    this._dataSrv
      .lister()
      .subscribe(
        liste => (this.liste = liste),
        error =>
          alert(
            `la recuperation des doneees ne s'est pas bien passée` + error
          )
      );
  }
}
