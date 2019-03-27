import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-compteur-vote',
  templateUrl: './compteur-vote.component.html',
  styleUrls: ['./compteur-vote.component.css']
})
export class CompteurVoteComponent implements OnInit {

  actionSub: Subscription ;
  @Input() compteur: number ;

  constructor(private _serviceVote: DataService) { }

  ngOnInit() {
    this.compteur = 0 ;
    this.actionSub = this._serviceVote.listerVotes().subscribe(
      (data) => {
        this.compteur += 1 ;
      },
      error => {
        console.log(error);
      }
    );

  }

}
