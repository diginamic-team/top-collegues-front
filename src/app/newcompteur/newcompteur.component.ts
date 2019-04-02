import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-newcompteur',
  templateUrl: './newcompteur.component.html',
  styleUrls: ['./newcompteur.component.css']
})
export class NewcompteurComponent implements OnDestroy {

  compteurVote: number = 0;
  compteurSub: Subscription
  constructor(private _dataService: DataService) {
    this.compteurSub = this._dataService.listerVote().subscribe(() => {
      this.compteurVote++;
    },
      error => {

      });
  }

  ngOnDestroy() {

  }
}
