import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  listCollegues;
  constructor(private data: DataService) {
   }

  ngOnInit() {
    this.data.lister().subscribe(
      liste => this.listCollegues = liste,
      error => alert(`la recuperation des doneees ne s'est pas bien passe` + error)
    );
  }
  rafraichir(){
    this.data
      .lister()
      .subscribe(
        liste => (this.listCollegues = liste),
        error =>
          alert(
            `la recuperation des doneees ne s'est pas bien passe` + error
          )
      );
  }
}
