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
  hideAimer: boolean =false;
  hideDetester: boolean =false;
  constructor(private _DateService:DataService) { }

  ngOnInit() {
  }
  avisTraiterEmis(unAvis: Avis){
    this.col.score = this._DateService.donnerUnAvis(this.col, unAvis).score;
    this.disable()
  }
  disable(){
      if(this.col.score >=1000){
        this.hideAimer= true;
      }else{
        this.hideAimer= false;
      }
      if(this.col.score <=-1000){
        this.hideDetester= true;}
        else{
          this.hideDetester = false;

        }
  
  }

}
