import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  collegues:Collegue[];

  constructor(private _serviceAvis: DataService) {

   }

  ngOnInit() {
    this.collegues = this._serviceAvis.lister();
  }


}
