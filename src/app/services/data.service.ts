import { Injectable, Input } from '@angular/core';
import { Collegue, Avis, Vote } from '../models';
import { collegues } from '../collegues';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // TODO alimenter la liste de collègues
  listeCollegues: Collegue[] = collegues;

  private listeVotes: Vote[] = [];

  constructor() { }

  lister(): Collegue[]  {
    // TODO retourner une liste fictives de collègues  
    return this.listeCollegues;
  }

  donnerUnAvis(collegue: Collegue, a: Avis): Collegue  {
    // TODO mettre à jour le score du collègue et retourner le collègue à jour 
    if (Avis.AIMER === a) {
      collegue.score += 100;
    } else if (Avis.DETESTER === a && collegue.score > -100) {
      collegue.score -= 100;
    }
    return collegue;
  }

  listerVotes(): Vote[] {
    // TODO retourner la liste des votes.
    const votes: Vote[] = [
      { collegue : this.listeCollegues[0], avis : Avis.AIMER},
      { collegue: this.listeCollegues[2], avis: Avis.AIMER },
      { collegue: this.listeCollegues[1], avis: Avis.DETESTER }
  ];
    return votes;
  }

}
