import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {


  @Input() col: Collegue;

  constructor() { 
    

  }

  ngOnInit() {
  }

  traiterAvis(unAvis:Avis){

    if(unAvis === Avis.AIMER ){
      this.col.score += 50;
    }else if(unAvis === Avis.DETESTER){
      this.col.score -= 80;
    }

  }

}
