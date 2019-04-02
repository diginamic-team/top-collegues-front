import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../services/data.service';
import { Collegue, Avis } from '../models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {

  collegue: Collegue = {};
  pseudo: string ;
  actionSub: Subscription ;

  constructor(private _route: ActivatedRoute, private _service: DataService) {

   }

  ngOnInit() {

    this._route.paramMap.subscribe((params: ParamMap) => {
      // récupération du paramètre id
       const pseudo = params.get('pseudo');
       console.log(pseudo);
       this._service.envoyerPseudo(pseudo).subscribe(
        value => this.collegue = value ,
        error => console.log(error),
      );

   });
  }

  traiterAvis(unAvis: Avis){

    this.actionSub = this._service.donnerUnAvis(this.collegue, unAvis).subscribe(
      (data: Collegue) => {
        this.collegue.score = data.score ;
      },
      error => {
        console.log(error);
      }
    );
  }
}
