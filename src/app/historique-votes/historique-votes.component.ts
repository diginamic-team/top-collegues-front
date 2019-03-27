import { Component, OnInit } from '@angular/core';
import { Vote, Avis } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {
  
  tableauVote: Vote[] = this._DataService.listerVote();
  Avis = Avis;
  constructor(private _DataService: DataService) {

   }


  ngOnInit() {
  }
supprimer(i){
  this.tableauVote.splice(i,1);
}
}
