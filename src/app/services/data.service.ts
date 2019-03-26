import { Injectable } from '@angular/core';
import { Collegue, Avis, listeCollegue, Vote } from '../models';
import { CollegueComponent } from '../collegue/collegue.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // TODO alimenter la liste de collègues
  listeCollegue: Collegue[] = listeCollegue;

  constructor() { }

  lister(): Collegue[] {
    // TODO retourner une liste fictives de collègues
    return this.listeCollegue;
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Collegue {
    // TODO mettre à jour le score du collègue et retourner le collègue à jour
    if (avis === Avis.AIME) {
      collegue.score++;
    } else if (avis === Avis.DETESTE) {
      collegue.score--;
    }
    return collegue;
  }

  // TODO alimenter la liste de votes
  // Référencer un objet Collegue comme suit : `this.listeCollegues[0]`

  private listeVote: Vote[] = [
    { collegue: this.listeCollegue[0], avis: Avis.AIME },
    { collegue: this.listeCollegue[1], avis: Avis.DETESTE },
    { collegue: this.listeCollegue[2], avis: Avis.AIME },
  ];

  listerVotes(): Vote[] {
    // TODO retourner la liste des votes.
    return this.listeVote;
  }

}
