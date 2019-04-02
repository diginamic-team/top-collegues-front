import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from '../services/data.service';
import { CompteurLocalStorageService } from '../services/compteur-service';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.css']
})
export class CompteurComponent implements OnInit {
  actionSub: Subscription;
  compteur: number;

  constructor(private _dataServ: DataService, private _serviceCompteur: CompteurLocalStorageService) {
    this.actionSub = this._dataServ.listerVotes().subscribe(
      () => {
        this._serviceCompteur.item=++this.compteur;

      },
      error => {
        console.log('erreur')
      },

      () => {

      });
  }

  ngOnInit() {
    if (localStorage.length > 0) {
      this.compteur = Number(localStorage.getItem('votes'));
    } else {
      this.compteur = 0;
    }

  }

}


