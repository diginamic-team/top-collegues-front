import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  @Input() col: Collegue;

  hideAimer: boolean =false;
  hideDetester: boolean =false;
  constructor() { }

  ngOnInit() {
  }
  avisTraiterEmis(unAvis: Avis){
    if (unAvis == Avis.AIMER){
      this.col.score += 200;
      if(this.col.score >=1000){
        this.hideAimer= true;
      }else{
        this.hideAimer = false;
      }
    }else if(unAvis == Avis.DETESTER){
      this.col.score -=300;
      if(this.col.score <=-1000){
        this.hideDetester= true;
      }else{
        this.hideDetester= false;
      }
    }
  }
}
