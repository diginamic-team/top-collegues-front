import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  @Output() add : EventEmitter <Avis> = new EventEmitter<Avis> ();
  // @Input() checkScore : boolean;

  addLike() {
    this.add.emit(Avis.AIME);
  };

  addDislike() {
    this.add.emit(Avis.DETESTE);
  };

  constructor() { }

  ngOnInit() {
  }

}
