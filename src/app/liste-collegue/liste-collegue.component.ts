import { Component, OnInit, Input } from '@angular/core';
import {Collegue } from '../models';

@Component({
  selector: 'app-liste-collegue',
  templateUrl: './liste-collegue.component.html',
  styleUrls: ['./liste-collegue.component.css']
})
export class ListeCollegueComponent implements OnInit {

  @Input() liste: Collegue[];

  constructor() { }

  ngOnInit() {
  }

}
