import { Component, OnInit, Input } from '@angular/core';
import { Avis, Collegue } from '../model';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
@Input() col: Collegue;
  constructor() { }

  ngOnInit() {
  }

  traiterAvisEmis(unAvis:Avis){
if(unAvis === Avis.AIMER){
  this.col.score +=5;
}

if (unAvis === Avis.DETESTER){
  this.col.score -=5;
}
  }

}
