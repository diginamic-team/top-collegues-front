import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  listeDeCollegue: Collegue[];
  listerCollegueSub: Subscription;
  constructor(private _dataService: DataService) {

    this._dataService.lister().subscribe((collegue: Collegue[]) => {
      this.listeDeCollegue = collegue;
    },
      error => {

      });
  }

  ngOnDestroy() {
    // désabonnement du composant avant sa destruction
    this.listerCollegueSub.unsubscribe();
  }
  ngOnInit() {
  }

}
