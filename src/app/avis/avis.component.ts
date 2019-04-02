import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Avis } from '../model';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

@Output() avisEmis = new EventEmitter<Avis>();

  constructor() { }

  ngOnInit() {
  }
jaime(){
  this.avisEmis.emit(Avis.AIMER);
}

jedeteste (){
  this.avisEmis.emit(Avis.DETESTER);
}
}
