import { Injectable } from '@angular/core';
import { Collegue, Avis, listeCollegue, Vote } from '../models';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // TODO alimenter la liste de collègues
  listeCollegue: Collegue[] = listeCollegue;
  // création d'une instance de Subject
  // le subject est privé, seul le service DataService peut émettre une valeur
  private listeVote = new Subject<Vote>();

  constructor() { }

  lister(): Observable<Collegue[]> {
    // TODO retourner une liste fictives de collègues
    // utiliser la fonction `of`
    return of(this.listeCollegue);
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {
    // TODO mettre à jour le score du collègue et retourner le collègue à jour
    // utiliser la fonction `of`
    if (avis === Avis.AIME) {
      collegue.score++;
    } else if (avis === Avis.DETESTE) {
      collegue.score--;
    }
    this.listeVote.next({
      collegue, avis
    });
    return of(collegue);
  }

  // TODO alimenter la liste de votes
  // Référencer un objet Collegue comme suit : `this.listeCollegues[0]`

  listerVotes(): Observable<Vote> {
    // TODO retourner la liste des votes.
    return this.listeVote.asObservable();
  }

}
