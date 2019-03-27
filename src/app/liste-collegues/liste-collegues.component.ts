import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.css']
})
export class ListeColleguesComponent implements OnInit {
  @Input() listCollegue;
  page = 1;

  constructor() { }

  ngOnInit() {
  }

}
