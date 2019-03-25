import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { Avis, Collegue } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  @Input() hideAimer: boolean;
  @Input() hideDetester: boolean;


  ngOnInit() {
    
  }

   @Output() change:EventEmitter<number> = new EventEmitter<number>();

    quandOnAimer() {
        console.log('AIMER!')
        this.change.emit(Avis.AIMER);
    }
  quandOnDetester() {
    console.log('DETESTER!')
    this.change.emit(Avis.DETESTER);
  
  }
}
