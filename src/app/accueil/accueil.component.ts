import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

// import { collegues } from '../collegue';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  listCollegues;

  constructor(private data: DataService) { 
    this.listCollegues = this.data.lister();
  }

  ngOnInit() {
  }

}
