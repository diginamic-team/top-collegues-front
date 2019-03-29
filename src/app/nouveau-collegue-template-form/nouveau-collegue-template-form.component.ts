import { Component, OnInit } from '@angular/core';
import { NewCollegue } from '../models';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  newCollegue: NewCollegue = {};
  erreur: string;

  //fonction submit du formulaire
  submit() {

    console.log(this.newCollegue);
    this._dataSrv.creerCollegue(this.newCollegue)
      .subscribe(
        (_collegueCree) => {
          this.erreur = '';
          this.router.navigate(['/accueil']);
        },
        // collegueCree => console.log('super'),
        // err => console.log('ooops', err.error),
        err => {
          this.erreur = err.error;
        }
      );
  }

  constructor(private _dataSrv: DataService, private router: Router) { }


  ngOnInit() {
  }

}
