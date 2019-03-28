import { Injectable } from '@angular/core';
import { Collegue, Avis, Vote } from '../models';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  subjectCollegues = new Subject<Collegue[]>();
  // listeCollegues: Collegue[] = [];

  constructor(private _http:HttpClient) { }

    httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };


  subjectVote = new Subject<Vote>();

  listerVote(): Observable<Vote> {
    return this.subjectVote.asObservable();

  }

  lister(): Observable<Collegue[]> {
    const URL_BACKEND = environment.backendUrl;
    return this._http.get<Collegue[]>(URL_BACKEND + 'collegues');
    }

  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {
    const URL_BACKEND = environment.backendUrl;
      return this._http.patch<Collegue>(URL_BACKEND + 'collegues/' + collegue.pseudo,
      {
        action: avis
      },
      this.httpOptions).pipe(tap(coll => {
        const vote:Vote = {
          collegue:coll,
           avis:avis,
         };
         this.subjectVote.next(vote)
      }
      ))

    // if (avis == Avis.AIMER) {
    //   collegue.score += 100;
    //   this.subjectVote.next({ collegue: collegue, avis: avis })
    //   if (collegue.score >= 1000) {
    //     // this.hideAimer= true;
    //   } else {
    //     // this.hideDetester= false;
    //   } return collegue
    // } else if (avis == Avis.DETESTER) {
    //   collegue.score -= 100;
    //   this.subjectVote.next({ collegue: collegue, avis: avis })
    //   if (collegue.score <= -1000) {
    //     // this.hideDetester= true;
    //   } else {
    //     // this.hideAimer = false;
    //   } return collegue
    // }
  }

}
