import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  actionSub: Subscription ;

  @Input() col: Collegue;

  constructor(private _serviceAvis: DataService) {


  }

  ngOnInit() {

     }

  traiterAvis(unAvis: Avis){

    this.actionSub = this._serviceAvis.donnerUnAvis(this.col, unAvis).subscribe(
      (data: Collegue) => {
        this.col.score = data.score ;
      },
      error => {
        console.log(error);
      }
    );


    //const colAJ = this._serviceAvis.donnerUnAvis(this.col, unAvis);

    //this.col.score = colAJ.score;

  }

}
