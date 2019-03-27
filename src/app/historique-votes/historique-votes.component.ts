import { Component, OnDestroy } from '@angular/core';
import { Vote, Avis } from '../models';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnDestroy {
  tableauVote: Vote[] = []
  voteSub: Subscription;
  compteurVote: number;

  Avis = Avis;
  constructor(private _dataService: DataService) {
    this.voteSub = this._dataService.listerVote().subscribe((vote: Vote) => {
      this.tableauVote.unshift(vote);
    },
      error => {
        console.log('Problème d\'envoie du vote')
      });
  }
  ngOnDestroy() {
    // désabonnement du composant avant sa destruction
    this.voteSub.unsubscribe();
  }


  supprimer(i) {
    this.tableauVote.splice(i, 1);
  }
}
