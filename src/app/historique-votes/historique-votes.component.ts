import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Vote } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  @Input() votes:Vote[]=this._serviceVote.listerVotes();

  constructor(private _serviceVote: DataService) { }

  ngOnInit() {

  }

}
