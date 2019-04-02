import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from './../services/data.service';
import { PapaCollegue } from './../PapaCollegue';
import { Avis } from '../models';
import { collegues } from '../collegues';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  pseudo: string;
  collegue: PapaCollegue;
  likeActivated = true;
  dislikeActivated = true;
  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    this.collegue = {
      pseudo: '',
      prenom: '',
      score: 0,
      email: '',
      photo: '',
    }
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.pseudo = params.get('pseudo');
    });
    this.data.getOneUserByPseudo(this.pseudo).
    subscribe(col => this.collegue = col,
      error => console.log(error.error)
      );

  }
  voter(avis: Avis) {
    if (avis === Avis.AIMER) {
      this.dislikeActivated = true;
      this.data
        .donnerUnAvis(this.collegue, avis)
        .subscribe(value => {
          this.collegue.score = value.score;
          if (this.collegue.score >= 200) {
            this.likeActivated = false;
          }
        },
          error => console.log(`oservable n'a pas fonctionne ` + error.error));
    } else {
      this.likeActivated = true;
      this.data
        .donnerUnAvis(this.collegue, avis)
        .subscribe(value => {
          this.collegue.score = value.score;
          if (this.collegue.score <= -100) {
            this.dislikeActivated = false;
          }
        },
          error => console.log(`oservable n'a pas fonctionne ` + error.error));
    }

  }


}
