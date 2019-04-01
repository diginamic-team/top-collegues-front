import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  @Output() change: EventEmitter<Avis> = new EventEmitter<Avis>();
  @Input() dislike;
  @Input() like;
  Avis = Avis;
  avis(s: Avis) {
    this.change.emit(s);
  }
  constructor() { }

  ngOnInit() {
  }


}
