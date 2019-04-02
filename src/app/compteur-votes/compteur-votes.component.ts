import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-compteur-votes',
  templateUrl: './compteur-votes.component.html',
  styleUrls: ['./compteur-votes.component.css']
})
export class CompteurVotesComponent implements OnInit {
 compteur: number;
  constructor(private data: DataService) { }

  ngOnInit() {
    if (localStorage.getItem('compteur') != null) {
      this.compteur = Number(localStorage.getItem('compteur'));
    } else {
      this.compteur = 0;
    }
    this.data.listerVotes().subscribe(() => {
      this.compteur++ ,
      localStorage.setItem('compteur', this.compteur.toString());
    },
      () => alert('observable mal passe'),
    );
  }
}
