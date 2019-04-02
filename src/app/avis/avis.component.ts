import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { Avis } from '../models';

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
        this.change.emit(Avis.AIMER);
    }
  quandOnDetester() {
    this.change.emit(Avis.DETESTER);
  
  }
}
