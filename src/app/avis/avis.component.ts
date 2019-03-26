import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css'],
 
})
export class AvisComponent implements OnInit {

  @Output() avis = new EventEmitter<Avis>();

  jaime(){
    this.avis.emit(Avis.AIMER);
  }

  jedeteste(){
    this.avis.emit(Avis.DETESTER);
  }

  constructor() { }

  ngOnInit() {
  }

}
