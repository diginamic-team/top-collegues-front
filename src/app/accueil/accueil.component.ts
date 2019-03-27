import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  actionSub: Subscription ;
  collegues: Collegue[] ;

  constructor(private _serviceAvis: DataService) {

   }

  ngOnInit() {

    this.actionSub = this._serviceAvis.lister().subscribe(
      (data: Collegue[]) => {
       this.collegues = data;
      },
      error => {
        console.log(error);
      }
    );
  }


}
