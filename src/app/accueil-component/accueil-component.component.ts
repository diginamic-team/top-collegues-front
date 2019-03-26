import { Component, OnInit } from '@angular/core';
import { listeCollegues } from '../mock';

@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.css']
})
export class AccueilComponentComponent implements OnInit {

  liste = listeCollegues;
  constructor() { }

  ngOnInit() {
  }

}
