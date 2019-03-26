import { Component, OnInit, Input } from '@angular/core'
import { Collegue } from '../model';



@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.css']
})
export class ListeColleguesComponentComponent implements OnInit {
  @Input() liste:Collegue[];
  constructor() { }

  ngOnInit() {
  }

}
