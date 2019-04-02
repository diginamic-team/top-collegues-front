import { Injectable, Input } from '@angular/core';
import { Collegue, Avis, Vote } from '../model';
import { listeCollegues } from '../mock';
import { Observable, of, Subject, interval } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MonFormulaire } from '../nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { PapaCollegue } from '../collegue/PapaCollegues';

const URL_BACKEND = environment.backendUrl;

const colServeurToCollegueIhm = (colServeur) => {
  const colFront: Collegue = {
    pseudo: colServeur.pseudo,
    imageURL: colServeur.photo,
    score: colServeur.score
  };
  return colFront;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // TODO alimenter la liste de collègues
  private listeCollegues: Collegue[];
  private subject = new Subject<Vote>();



  constructor(private _http: HttpClient) { }

  envoieBack(c: MonFormulaire): Observable<MonFormulaire> {
    const URL_BACKEND = environment.backendUrl;
    return this._http.post<MonFormulaire>(URL_BACKEND, c);
  }

  lister(): Observable<Collegue[]> {
    // Retourne une liste fictives de collègues

    const obs: Observable<any> = this._http.get(URL_BACKEND);

    return obs.pipe(
      map((tableauColServeur: any[]) => {

        const tableauCols = tableauColServeur.map(colServeurToCollegueIhm);

        return tableauCols;

      })
    )
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {
    const URL_BACKEND = environment.backendUrl + collegue.pseudo;
    return this._http.patch<Collegue>(URL_BACKEND,
      {
        action: avis
      }).pipe(
        map(colServeurToCollegueIhm),
        tap(colDuServeur => {
          this.subject.next({
            collegue: { ...colDuServeur },
            avis: avis
          })
        })
      );
  }

  listerVotes(): Observable<Vote> {  //subject.asObservable()
    return this.subject.asObservable();
  }

  insertNewCollegue(mat: string, ps: string , img: string ): Observable<Collegue> {
    const URL_BACKEND = environment.backendUrl ;
    return this._http.post<Collegue>(URL_BACKEND, {
      matricule : mat,
      nom : ps,
      photo : img
    });
}

  getOneUserByPseudo(pseudo: string): Observable<PapaCollegue> {
    const URL_BACKEND = environment.backendUrl + '/?pseudo=' + pseudo;
    return this._http.get<PapaCollegue>(URL_BACKEND);
  }
}
