import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CollegueBD, Avis } from '../models';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.css']
})
export class DetailCollegueComponent implements OnInit {

  pseudo: string;

  colBd: CollegueBD = {};

  constructor(private route: ActivatedRoute, private dataService: DataService) {

    this.pseudo = route.snapshot.paramMap.get('pseudo');
  }

  ngOnInit() {
    // abonnement au changement de route avec réutilisation du composant par le routeur.
    this.route.paramMap.subscribe((params: ParamMap) => {
      // récupération du paramètre pseudo
      const pseudo = params.get('pseudo');

      console.log(pseudo);

      this.dataService.afficherDetail(pseudo).subscribe(collegueBd => this.colBd = collegueBd);


    });
  }

  avisEmis(avis: Avis) {

    if (avis === Avis.AIME) {
      this.dataService.donnerUnAvis({ pseudo :  this.colBd.pseudo,
      score : this.colBd.score, photoUrl: this.colBd.photoUrl }, avis).subscribe(collegueBd => this.colBd.score = collegueBd.score);

    } else if (avis === Avis.DETESTE) {
      this.dataService.donnerUnAvis({ pseudo :  this.colBd.pseudo,
        score : this.colBd.score, photoUrl: this.colBd.photoUrl }, avis).subscribe(collegueBd => this.colBd.score = collegueBd.score);
    }
  }
}
