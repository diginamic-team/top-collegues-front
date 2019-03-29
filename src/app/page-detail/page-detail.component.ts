import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {


  pseudo: string ;

  constructor(private _route: ActivatedRoute) {
    this.pseudo = _route.snapshot.paramMap.get('pseudo');
   }

  ngOnInit() {

    this._route.paramMap.subscribe((params: ParamMap) => {
      // récupération du paramètre id
       const pseudo = params.get('pseudo');

   });
  }

}
