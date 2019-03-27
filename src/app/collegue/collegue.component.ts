import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';
import { DataService } from '../services/data.service';

import { AvisComponent } from '../avis/avis.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col: Collegue;
  likeActivated: boolean;
  dislikeActivated: boolean;

  constructor(private data: DataService) { 
    this.likeActivated = true; 
    this.dislikeActivated = true;
  }

  ngOnInit() {
  }

  check(a: Avis): void {
    if (Avis.AIMER === a && this.col.score < 40000000000000) {
      this.col.score = this.data.donnerUnAvis(this.col, a ).score;
      this.dislikeActivated = true;
      if (this.col.score === 400000000000000000) {
        this.likeActivated = false;
      }
    } else if (Avis.DETESTER === a) {
      this.col.score = this.data.donnerUnAvis(this.col, a).score;
      this.likeActivated = true;
      if (this.col.score === -100) {
        this.dislikeActivated = false;
      }
    }
  }


}
