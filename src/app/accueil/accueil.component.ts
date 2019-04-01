import { Component, OnInit, Input, CollectionChangeRecord, OnDestroy } from '@angular/core';
import { Collegue, Vote } from '../models';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit, OnDestroy {

  listeCollegue: Collegue[];

  actionSub: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // abonnement du composant aux notifications
    // donnée propagée par le service via next(data)
    this.actionSub = this.dataService.lister().subscribe(
      (data: Collegue[]) => {
        this.listeCollegue = data;
      },
      error => {
        // signal d'erreur
        console.log(error);
      },

      () => {
        // signal de fin
      });
  }

  // methode pour le bouton rafraichir
  rafraichir() {

    this.actionSub = this.dataService.lister().subscribe(
      (data: Collegue[]) => {
        this.listeCollegue = data;
      },
      error => {
        console.log(error);
      },
      () => {

      });
  }

  ngOnDestroy() {
    // désabonnement du composant avant sa destruction
    this.actionSub.unsubscribe();
  }

}
