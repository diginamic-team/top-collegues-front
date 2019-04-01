import { Injectable } from '@angular/core';
import { Collegue, Avis, Vote } from '../models';
import { collegues } from '../collegues';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { RandomCollegue } from '../RandomCollegue';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // TODO alimenter la liste de collègues
  listeCollegues: Collegue[] = collegues;

  // private listeVotes: Vote[] = [];
  private listeVotes = new Subject<Vote>();

  constructor(private http: HttpClient) { }

  // lister(): Collegue[]  {
  //   // TODO retourner une liste fictives de collègues  
  //   return this.listeCollegues;
  // }
  // 

  lister(): Observable<Collegue[]> {
    const URL_BACKEND = environment.backendUrl + 'collegues';
    return this.http.get<Collegue[]>(URL_BACKEND);
  }

  // donnerUnAvis(collegue: Collegue, a: Avis): Collegue  {
  //   // TODO mettre à jour le score du collègue et retourner le collègue à jour 
  //   if (Avis.AIMER === a) {
  //     collegue.score += 1;
  //   } else if (Avis.DETESTER === a && collegue.score > -100) {
  //     collegue.score -= 1;
  //   }
  //   // this.listeVotes.next({collegue, avis: a})
  //   return collegue;
  // }

  donnerUnAvis(collegue: Collegue, a: Avis): Observable<Collegue> {
    const URL_BACKEND = environment.backendUrl + 'collegues/' + collegue.pseudo;
    return this.http
      .patch<Collegue>(URL_BACKEND, {
        action: a
      })
      .pipe(tap(col => this.listeVotes.next({collegue : col , avis : a }))
      )
    }

  // RxJS

//   listerVotes(): Vote[] {
//     // TODO retourner la liste des votes.
//   //   const votes: Vote[] = [
//   //     { collegue : this.listeCollegues[0], avis : Avis.AIMER},
//   //     { collegue: this.listeCollegues[2], avis: Avis.AIMER },
//   //     { collegue: this.listeCollegues[1], avis: Avis.DETESTER }
//   // ];
//   //   return votes.of([]);

//   // return this.listeVotes.asObservable();

//   const votes: Vote[] = [
//     { collegue : this.listeCollegues[0], avis : Avis.AIMER},
//     { collegue: this.listeCollegues[2], avis: Avis.AIMER },
//     { collegue: this.listeCollegues[1], avis: Avis.DETESTER }
// ];
//   return votes;
//   }

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

  getOneUserByPseudo(pseudo: string): Observable<RandomCollegue> {
    const URL_BACKEND = environment.backendUrl + 'collegues/?pseudo=' + pseudo;
    return this.http.get<RandomCollegue>(URL_BACKEND);
  }

  // listerCollegues(): Observable<Collegue[]>  {
  //   // utiliser la fonction `of`
  //   // ...  
  // }


   

  // donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue>  {
  //   // utiliser la fonction `of`
  //   // ...
  // }

  // // les votes sont désormais envoyés 1 à 1 à travers un observable
  // listerVotes(): Observable<Vote> {
  //   // utiliser la fonction `subject.asObservable()`
  //   // ...
  // }


  // // observable$.subscribe(value => console.log(value), error => console.log(error), () => console.log('terminé'))
  // const observable = new Observable(observer => {
  //   setTimeout(() => {
  //     observer.next('Hello from a Observable!');
  //   }, 2000);
  // });
  
  // observable.subscribe(value => console.log(value));
}
