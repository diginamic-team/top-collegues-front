import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-compteur-vote',
  templateUrl: './compteur-vote.component.html',
  styleUrls: ['./compteur-vote.component.css']
})
export class CompteurVoteComponent implements OnInit {

  compteur: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.listerVotes().subscribe(() => this.compteur++);
  }

}
