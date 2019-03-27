import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../model';

@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.css']
})
export class AccueilComponentComponent implements OnInit {

  liste:Collegue[] = [];
  constructor(private _dataSrv: DataService) { }

  ngOnInit() {
    this._dataSrv.lister().subscribe(l =>  this.liste = l);
  }

}
