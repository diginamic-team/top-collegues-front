import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-componant.component.html',
  styleUrls: ['./collegue-componant.component.css']
})
export class CollegueComponent implements OnInit {
  @Input() collegue: Collegue;
  likeActivated: boolean;
  dislikeActivated: boolean;
  constructor(private data: DataService, private router: Router) {
    this.dislikeActivated = true;
    this.likeActivated = true;
  }

  ngOnInit() {}

  display(pseudo: string) {
    this.router.navigate(['/collegues/' + pseudo]);
  }

  check(a: Avis): void {
    if (Avis.AIMER === a && this.collegue.score < 200) {
      this.data
        .donnerUnAvis(this.collegue, a)
        .subscribe(value => (this.collegue = value),
        error => console.log(`oservable n'a pas fonctionne ` + error.error));
      this.dislikeActivated = true;
      if (this.collegue.score === 200) {
        this.likeActivated = false;
      }
    } else if (Avis.DETESTER === a && this.collegue.score > -100) {
      this.data
        .donnerUnAvis(this.collegue, a)
        .subscribe(value => (this.collegue = value),
          error => console.log(`oservable n'a pas fonctionne ` + error.error));
      this.likeActivated = true;
      if (this.collegue.score === -100) {
        this.dislikeActivated = false;
      }
    }
  }
}
