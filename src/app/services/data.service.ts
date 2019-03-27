import { Injectable, Input } from '@angular/core';
import { Collegue, Avis, Vote } from '../model';
import { listeCollegues } from '../mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

// TODO alimenter la liste de collègues
listeCollegues: Collegue[] = listeCollegues;
private listeVotes : Vote[]=[];


constructor() { }

lister(): Collegue[]  {
  // Retourne une liste fictives de collègues
  return this.listeCollegues;
}

donnerUnAvis(collegue: Collegue, avis: Avis): Collegue  {
  if (Avis.AIMER === avis && collegue.score < 200) {
    collegue.score += 10;
  } else if (Avis.DETESTER === avis && collegue.score > -100) {
    collegue.score -= 10;
  }
  return collegue;
}
listerVotes(): Vote[] {
  const votes: Vote[] = [
    { collegue : this.listeCollegues[0], avis : Avis.AIMER},
    { collegue: this.listeCollegues[1], avis: Avis.AIMER },
    { collegue: this.listeCollegues[2], avis: Avis.DETESTER },
    { collegue: this.listeCollegues[3], avis: Avis.DETESTER },
    { collegue: this.listeCollegues[4], avis: Avis.DETESTER },
    { collegue: this.listeCollegues[5], avis: Avis.DETESTER }
];
  return votes;
}
}
