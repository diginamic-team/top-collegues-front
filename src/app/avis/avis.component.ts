import { Component, OnInit, Output, Input } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  @Output() change: EventEmitter<Avis> = new EventEmitter<Avis>();
  @Input() outLove :boolean;
  @Input() outHate: boolean;
  constructor() { }

  ngOnInit() {
  }

  outLove(){
   this.change.emit(Avis.AIMER);
  }

  outHate() {
   this.change.emit(Avis.DETESTER);
  }

}
