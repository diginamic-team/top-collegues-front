import { Component, OnInit, Input, CollectionChangeRecord } from '@angular/core';
import { Collegue, listeCollegue } from '../models';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  listeCollegue: Collegue[] = listeCollegue;

  constructor() { }

  ngOnInit() {
  }

}
