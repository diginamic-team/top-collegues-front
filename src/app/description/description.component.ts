import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from './../services/data.service';
import { RandomCollegue } from './../RandomCollegue';
import { Avis } from '../models';
import { collegues } from '../collegues';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})


export class DescriptionComponent implements OnInit {

  pseudo: string;
  collegue: RandomCollegue;
  like = true;
  dislike = true;

  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {

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
      this.dislike = true;
      this.data
        .donnerUnAvis({
          pseudo: this.collegue.pseudo,
          photoUrl: this.collegue.photo,
          score: this.collegue.score}, avis)
        .subscribe(value => {
          this.collegue.score = value.score;
          if (this.collegue.score >= 200) {
            this.like = false;
          }
        },
          error => console.log(`Observable ne fonctionne pas ` + error.error));
    } else {
      this.like = true;
      this.data
      .donnerUnAvis({
        pseudo: this.collegue.pseudo,
        photoUrl: this.collegue.photo,
        score: this.collegue.score}, avis)
        .subscribe(value => {
          this.collegue.score = value.score;
          if (this.collegue.score <= -100) {
            this.dislike = false;
          }
        },
          error => console.log(`Observable ne marche pas ` + error.error));
    }

  }

}
