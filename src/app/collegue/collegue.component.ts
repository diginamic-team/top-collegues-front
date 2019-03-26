import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models';
import { AvisComponent } from '../avis/avis.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col: Collegue;
  outLove: boolean = false;
  outHate: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  traiterAvisEmis(unAvis: Avis) {
    if(unAvis == Avis.AIMER) {
      this.col.score += 200;
    } else if (unAvis == AvisComponent.DETESTER) {
      this.col.score -= 300;
    }
  }

  avis(unAvis: Avis) {
    if(unAvis == Avis.AIMER){
      this.col.score += 100;
      if (this.c.score >=1000){
        this.outLove = true
      }else{
        this.outLove = false
      }
      if (this.col.score <= -1000) {
        this.outHate = true
      } else {
        this.outHate = false;
      }
   
    }else{
      this.col.score -= 100;
      if (this.col.score <= -1000) {
        this.outHate = true
      } else {
        this.outHate = false;
      } if (this.c.score >= 1000) {
        this.outLove = true
      } else {
        this.outLove = false
      }
      console.log("jaime pas")
    }

  }

}
