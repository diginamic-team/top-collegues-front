import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  listCollegues;
  err = false;
  message: string;
  type: string;
  constructor(private data: DataService, private modalService: NgbModal) {
   }

  ngOnInit() {
    this.data.lister().subscribe(
      liste => this.listCollegues = liste,
      () => {this.type = 'warning',
              this.message = `la recuperation des donees ne s'est pas bien passe
              veuillez recharger la page d'ici quelques instants`,
                this.err = true;
              }
    );
  }
  rafraichir() {
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
