import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { Vote, Avis } from './../models';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {
  listeVotes: Vote[];
  avis = Avis;
  constructor(private data: DataService) { }

  ngOnInit() {
    // this.data.listerVotes().subscribe(vote =>
    //   this.listeVotes.unshift(vote)
    //   );

    this.data.listerVotes().subscribe(l => this.listeVotes.unshift(l));
  }

  delete(index) {
    console.log(index);
    this.listeVotes.splice(index, 1 ) ;
  }
}
