import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Collegue, Vote } from '../models';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit, OnDestroy {

  actionSub: Subscription ;

  @Input() votes: Vote[] = [];

  constructor(private _serviceVote: DataService) { }

  ngOnInit() {
    this.actionSub = this._serviceVote.listerVotes().subscribe(
      (data: Vote) => {
        this.votes.unshift(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  supprimer(i: number) {
    this.votes.splice(i, 1);
  }

  ngOnDestroy(): void {
    this.actionSub.unsubscribe();
  }

}
