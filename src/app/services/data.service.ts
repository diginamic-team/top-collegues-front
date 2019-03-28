import { Injectable } from '@angular/core';
import { Collegue, Avis, listeCollegue, Vote } from '../models';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


// en développement, URL_BACKEND = 'http://localhost:port'
// en mode production, URL_BACKEND = 'http://adresseheroku'
const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})

export class DataService {

  // TODO alimenter la liste de collègues
  listeCollegue: Collegue[];
  // création d'une instance de Subject
  // le subject est privé, seul le service DataService peut émettre une valeur
  private listeVote = new Subject<Vote>();

  constructor(private _http: HttpClient) { }

  lister(): Observable<Collegue[]> {
    // TODO retourner une liste fictives de collègues
    // utiliser la fonction `of`
    return this._http.get<any[]>(URL_BACKEND + '/collegues')
      .pipe(
        map(
          (tabCollegueServeur: any[]) => tabCollegueServeur.map(colServeur => {
            return {
              pseudo: colServeur.pseudo,
              photoUrl: colServeur.imageUrl,
              score: colServeur.score
            };
          }
          ))
      );
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {
    return this._http.patch<Collegue>(URL_BACKEND + '/collegues/' + collegue.pseudo,
      {
        Action: avis
      });
  }


  // donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {
  //   // TODO mettre à jour le score du collègue et retourner le collègue à jour
  //   // utiliser la fonction `of`
  //   if (avis === Avis.AIME) {
  //     collegue.score++;
  //   } else if (avis === Avis.DETESTE) {
  //     collegue.score--;
  //   }
  //   this.listeVote.next({
  //     collegue, avis
  //   });
  //   return of(collegue);
  // }

  // TODO alimenter la liste de votes
  // Référencer un objet Collegue comme suit : `this.listeCollegues[0]`


  // listerVotes(): Observable<Vote> {
  //   return this._http.get<Vote>(URL_BACKEND + '/collegues',
  //   {
  //     Vote :
  //   }
  // }

  listerVotes(): Observable<Vote> {
    // TODO retourner la liste des votes.
    return this.listeVote.asObservable();
  }

}
