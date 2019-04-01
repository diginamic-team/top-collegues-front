import { Injectable } from '@angular/core';
import { Collegue, Avis, Vote, NouveauCollegue } from '../models';
import { Observable, of, Subject, ReplaySubject } from 'rxjs';
import {environment} from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {tap} from 'rxjs/operators';
import { ValidationErrors } from '@angular/forms';

const URL_BACKEND = environment.backendUrl;


@Injectable({
  providedIn: 'root'
})
export class DataService {

  listeCollegues: Collegue[] = []
    /*{
      pseudo : 'collegue1',
      score :2000,
      imageUrl: "https://static1.squarespace.com/static/528b9077e4b076ee0b892f2f/t/579ce7ab5016e10ca2a21547/1469900728497/border-collie-close-up?format=750w"
    },

    {
      pseudo : 'collegue2',
      score :2000,
      imageUrl: "https://static1.squarespace.com/static/528b9077e4b076ee0b892f2f/t/579ce7ab5016e10ca2a21547/1469900728497/border-collie-close-up?format=750w"
    },

    {
      pseudo : 'collegue3',
      score :2000,
      imageUrl: "https://static1.squarespace.com/static/528b9077e4b076ee0b892f2f/t/579ce7ab5016e10ca2a21547/1469900728497/border-collie-close-up?format=750w"
    },
    {
      pseudo : 'collegue4',
      score :2000,
      imageUrl: "https://static1.squarespace.com/static/528b9077e4b076ee0b892f2f/t/579ce7ab5016e10ca2a21547/1469900728497/border-collie-close-up?format=750w"
    },

    {
      pseudo : 'collegue5',
      score :2000,
      imageUrl: "https://static1.squarespace.com/static/528b9077e4b076ee0b892f2f/t/579ce7ab5016e10ca2a21547/1469900728497/border-collie-close-up?format=750w"
    },

    {
      pseudo : 'collegue6',
      score :2000,
      imageUrl: "https://static1.squarespace.com/static/528b9077e4b076ee0b892f2f/t/579ce7ab5016e10ca2a21547/1469900728497/border-collie-close-up?format=750w"
    }
  ];*/

  /*private listeVotes: Vote[] = [
    {
      collegue: this.listeCollegues[0],
      avis: Avis.AIMER
    },
    {
      collegue: this.listeCollegues[1],
      avis: Avis.AIMER
    },
    {
      collegue: this.listeCollegues[2],
      avis: Avis.DETESTER
    }
  ]*/

  private listeVotes = new Subject<Vote>() ;

  constructor(private _http: HttpClient) { }

  lister(): Observable<Collegue[]>  {

    return  this._http.get<Collegue[]>(URL_BACKEND + '/collegues');
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {

   /*if(avis === Avis.AIMER ){
      collegue.score += 50;
    }else if(avis === Avis.DETESTER){
      collegue.score -= 80;
    }*/
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type" : "application/json"
      })
    };

    //this.listeVotes.next({"collegue" : { ...collegue}, "avis" : avis }) ;

    return this._http.patch<Collegue>(URL_BACKEND + '/collegues/' + collegue.pseudo, {action: avis}, httpOptions)
    .pipe(
      tap(collegueServeurAJour => this.listeVotes.next({ "collegue" : { ...collegueServeurAJour}, "avis" : avis })));//of(collegue);

  }

  listerVotes(): Observable<Vote> {
    return this.listeVotes.asObservable();
  }

  creerCollegue(nouveauCollegue: NouveauCollegue): Observable<Collegue> {
    return this._http.post<Collegue>(URL_BACKEND + '/collegues', nouveauCollegue);
  }

  envoyerPseudo(pseudo: string){
    return this._http.get<Collegue>(URL_BACKEND + '/collegues/' + pseudo);
  }

  /*checkMatricule(m): Observable<boolean> {

    return this._http.get<boolean>(URL_BACKEND + '/collegues?matricule=' + m);

}*/

}
