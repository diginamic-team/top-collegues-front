import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col: Collegue;

  avisEmis(avis: Avis) {

    if (avis === Avis.AIME) {
      this.dataService.donnerUnAvis(this.col, avis).subscribe(collegue => this.col = collegue);
      // this.col.score += 1;
      // if (this.col.score >= 5) {
      //   this.desactive = true;
      // }

    } else if (avis === Avis.DETESTE) {
      this.dataService.donnerUnAvis(this.col, avis).subscribe(collegue => this.col = collegue);
      // this.col.score -= 1;
      // if (this.col.score <= 5)
      //   desactive = true;
      // }
    }
  }

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
  }

}
