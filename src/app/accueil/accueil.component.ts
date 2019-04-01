import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// import { collegues } from '../collegue';

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
    // this.listCollegues = this.data.lister().subscribe(
    //   liste => this.listCollegues = liste,
    //   error => alert(`Failed getting data !` + error)
    //   );
   // this.listCollegues = this.data.lister();
  }

  ngOnInit() {
    this.data.lister().subscribe(
      liste => this.listCollegues = liste,
      () => {this.type = 'achtung',
              this.message = `Data not obtained please refresh`,
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
          alert(`Data not obtained` + error)
      );
  }

}
