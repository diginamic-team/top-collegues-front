import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private _DataService:DataService) { }
  listeDeCollegue:Collegue[] = this._DataService.lister();
  ngOnInit() {
  }

}
