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

  avisEmis(avis: Avis) {

    if (avis === Avis.AIME) {
      this.col.score = this._dataService.donnerUnAvis(this.col, avis).score;
      // this.col.score += 1;
      // if (this.col.score >= 5) {
      //   this.desactive = true;
      // }

    } else if (avis === Avis.DETESTE) {
      this.col.score = this._dataService.donnerUnAvis(this.col, avis).score;
      // this.col.score -= 1;
      // if (this.col.score <= 5)
      //   desactive = true;
      // }
    }
  }

  constructor(private _dataService: DataService) {
  }

  ngOnInit() {
  }

}
