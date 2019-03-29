import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { Vote, Avis } from '../model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {
 listeVotes: Vote[] = [];
 avis = Avis;
 actionSub: Subscription;
  constructor(private _dataSrv: DataService) {

    }


  ngOnInit() {
    this._dataSrv.listerVotes().subscribe( v => this.listeVotes.unshift(v));
  }

  sup(index) {
    console.log(index);
    this.listeVotes.splice(index, 1 ) ;
}
}
