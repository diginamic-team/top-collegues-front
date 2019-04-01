import { Injectable } from '@angular/core';
import { Collegue, Avis, listeCollegue, Vote, NewCollegue, CollegueBD } from '../models';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { NOMEM } from 'dns';


// convertion car pas les meme nommage des deux cotés
const collegueServeurToCollegueFront = colServeur => {
  return {
    pseudo: colServeur.pseudo,
    photoUrl: colServeur.imageUrl,
    score: colServeur.score,
    prenom: colServeur.prenom,
    nom: colServeur.nom,
    email: colServeur.email,
    adresse: colServeur.adresse,
  };
};

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
    return this._http.get<any[]>(URL_BACKEND + 'collegues')
      .pipe(
        map(
          (tabCollegueServeur: any[]) => tabCollegueServeur.map(collegueServeurToCollegueFront
          ))
      );
  }s

  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {
    return this._http.patch<any>(URL_BACKEND + 'collegues/' + collegue.pseudo,
      {
        action: avis
      })
      .pipe(
        map(collegueServeurToCollegueFront),
        tap(colCourant => this.listeVote.next({ collegue: colCourant, avis: avis }))
      );
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

  creerCollegue(newCollegue: NewCollegue): Observable<Collegue> {
    return this._http.post<Collegue>(URL_BACKEND + 'collegues/',
      newCollegue);
  }
  // GET /collegues?pseudo=XXX
  afficherDetail(pseudo: string): Observable<CollegueBD> {
    return this._http.get<CollegueBD>(URL_BACKEND + 'collegues?pseudo=' + pseudo)
      .pipe(
        map(collegueServeurToCollegueFront)
      );
  }
}
