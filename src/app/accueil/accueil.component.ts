import { Component, OnInit, Input, CollectionChangeRecord } from '@angular/core';
import { Collegue, Vote } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  listeCollegue: Collegue[];

  constructor(private dataService: DataService) {
    this.listeCollegue = this.dataService.lister();
  }

  ngOnInit() {
  }

}
