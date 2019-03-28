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

  liste:Collegue[] = [];
  constructor(private _dataSrv: DataService) { }

  ngOnInit() {
    this._dataSrv.lister().subscribe
    (liste => this.liste = listeCollegues,
      error => alert ("récupération de la liste fail" + error));
  }

  rafraichir(){
    this._dataSrv
      .lister()
      .subscribe(
        liste => (this.liste = liste),
        error =>
          alert(
            `la recuperation des doneees ne s'est pas bien passe` + error
          )
      );
  }

}
