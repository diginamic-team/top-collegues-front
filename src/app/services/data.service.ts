import { Injectable } from '@angular/core';
import { Collegue, Avis, Vote } from '../models';
import { collegues } from '../collegues';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { PapaCollegue } from '../PapaCollegue';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  listeCollegues: Collegue[] = collegues;
  private listeVotes = new Subject<Vote>();

  constructor( private http: HttpClient) {
  }


  lister(): Observable<Collegue[]> {
    const URL_BACKEND = environment.backendUrl + 'collegues';
    return this.http.get<Collegue[]>(URL_BACKEND);
  }

  donnerUnAvis(collegue: Collegue, a: Avis): Observable<Collegue> {
    const URL_BACKEND = environment.backendUrl + 'collegues/' + collegue.pseudo;
    return this.http
      .patch<Collegue>(URL_BACKEND, {
        action: a
      })
      .pipe(tap(col => this.listeVotes.next({collegue : col , avis : a })));
    }

  listerVotes(): Observable<Vote> {
    return this.listeVotes.asObservable();
  }

  insertNewCollegue(mat: string, ps: string , img: string ): Observable<Collegue> {
    const URL_BACKEND = environment.backendUrl + 'collegues';
    return this.http.post<Collegue>(URL_BACKEND, {
      matricule : mat,
      nom : ps,
      photo : img
    });
  }

  getOneUserByPseudo(pseudo: string): Observable<PapaCollegue> {
    const URL_BACKEND = environment.backendUrl + 'collegues?pseudo=' + pseudo;
    return this.http.get<PapaCollegue>(URL_BACKEND);
  }
}
