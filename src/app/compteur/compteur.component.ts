import { Component, OnInit } from '@angular/core';
import { Observable, } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.css']
})
export class CompteurComponent implements OnInit {
  compteur: number;
   constructor(private data: DataService) { }

   ngOnInit() {
     this.compteur = 0;
     this.data.listerVotes().subscribe(() => this.compteur++,
       () => alert('observable mal passé'),
     );
   }

 }
