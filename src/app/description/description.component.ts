import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from './../services/data.service';
import { PapaCollegue } from '../collegue/PapaCollegues';
import { AvisComponent } from '../avis/avis.component';
import { Avis, Collegue } from '../model';




@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
styleUrls: ['./description.component.css']
})

export class DescriptionComponent implements OnInit {
  pseudo: string;
  collegue: PapaCollegue;
  @Input() col: Collegue;

  constructor(private route: ActivatedRoute, private _dataSrv: DataService) { }

  ngOnInit() {
    this.collegue = {
      pseudo: '',
      prenom: '',
      score: 0,
      email: '',
      imageURL: '',
    }
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.pseudo = params.get('pseudo');
    });
    this._dataSrv.getOneUserByPseudo(this.pseudo).
    subscribe(col => this.collegue = col,
      error => console.log(error.error)
      );

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.pseudo = params.get('pseudo');
    });
    this._dataSrv.getOneUserByPseudo(this.pseudo).
    subscribe(col => this.collegue = col,
      error => console.log(error.error)
      );
  }

  traiterAvisEmis(unAvis: Avis) {
    this._dataSrv.donnerUnAvis(this.col, unAvis).subscribe(
      c => this.col = c
    );
  }
}
