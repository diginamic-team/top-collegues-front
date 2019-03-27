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
  }

  supp(i) {
    this.listeVote.splice(i, 1);
  }

  ngOnInit() {
    // preciser que le tableau est vide
    this.listeVote = [];

    // recuperation de l'observable (ici vote) et on l'ajoute à la liste
    this.dataService.listerVotes().subscribe(vote => this.listeVote.unshift(vote));
    // unshift ajoute au debut du tableau, push ajoute à la fin du tableau
  }

}
