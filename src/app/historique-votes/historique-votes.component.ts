import { Component, OnInit, Input } from '@angular/core';
import { Vote } from '../models';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  listeVote: Vote[];

  constructor(private dataService: DataService) {
    this.listeVote = this.dataService.listerVotes();
  }

  supp(i) {
    this.listeVote.splice(i, 1);
  }

  ngOnInit() {
  }

}
