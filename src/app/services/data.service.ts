import { Injectable, Input } from '@angular/core';
import { Collegue, Avis, Vote } from '../model';
import { listeCollegues } from '../mock';
import { Observable, of, Subject, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

// TODO alimenter la liste de collègues
private listeCollegues: Collegue[];

private subject = new Subject<Vote>();



constructor(private _http: HttpClient) { }

lister(): Observable<Collegue[]>  {
  // Retourne une liste fictives de collègues

  const obs: Observable<any> =  this._http.get(URL_BACKEND);

  return obs.pipe(
    map( (tableauColServeur: any[]) => {

      const tableauCols = tableauColServeur.map(colServeur =>  {
        const colFront: Collegue = {
          pseudo: colServeur.pseudo,
          imageURL: colServeur.photo,
          score: colServeur.score
        };
        return colFront;
      });

      return tableauCols;

    })
  )

}

donnerUnAvis(collegue: Collegue, avis: Avis):Observable <Collegue>  {
  const URL_BACKEND = environment.backendUrl + 'collegues/' + collegue.pseudo;
  return this._http.patch<Collegue>(URL_BACKEND,
    {
      action : avis
    });
}

listerVotes(): Observable<Vote> {  //subject.asObservable()



  return this.subject.asObservable();
}
}
