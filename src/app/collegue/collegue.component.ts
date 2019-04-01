import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col: Collegue;
  like: boolean;
  dislike: boolean;

  constructor(private data: DataService, private router: Router) { 
    this.like = true; 
    this.dislike = true;
  }

  ngOnInit() {
  }

  display(pseudo: string) {
    this.router.navigate(['/collegues/' + pseudo]);
  }

  check(a: Avis): void {
    if (Avis.AIMER === a && this.col.score < 40000000000000) {
      this.data.donnerUnAvis(this.col, a ).subscribe(
        col => this.col.score = col.score)
      this.dislike = true;
      if (this.col.score === 400000000000000000) {
        this.like = true;
      }
    } else if (Avis.DETESTER === a) {
      this.data.donnerUnAvis(this.col, a ).subscribe(
        value => (this.col = value),
          error => console.log(`Observable non fonctionnel ` + error.error))
    
      this.like = true;
      if (this.col.score === -100) {
        this.dislike = true;
      }
    }
  }

  // check(a: Avis): void {
  //   if (Avis.AIMER === a && this.col.score < 40000000000000) {
  //     this.data.donnerUnAvis(this.col, a ).subscribe(value => (this.col = value),
  //     error => alert(`Failed observable ! ` + error));
  //     this.dislike = true;
  //     if (this.col.score === 400000000000000000) {
  //       this.like = true;
  //     }
  //   } else if (Avis.DETESTER === a) {
  //     this.data.donnerUnAvis(this.col, a).subscribe(value => (this.col = value),
  //     error => alert(`Failed observable ! ` + error));
  //     this.like = true;
  //     if (this.col.score === -100) {
  //       this.dislike = true;
  //     }
  //   }
  // }


}
