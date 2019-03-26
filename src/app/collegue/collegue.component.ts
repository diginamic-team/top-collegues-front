import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {


  @Input() col: Collegue;

  constructor(private _serviceAvis: DataService) {


  }

  ngOnInit() {
  }

  traiterAvis(unAvis:Avis){

    const colAJ = this._serviceAvis.donnerUnAvis(this.col, unAvis);

    this.col.score = colAJ.score;

  }

}
