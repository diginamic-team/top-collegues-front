import { Injectable, Input } from '@angular/core';
import { Collegue, Avis, Vote } from '../model';
import { listeCollegues } from '../mock';
import { Observable, of, Subject, interval } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

// TODO alimenter la liste de collègues
private listeCollegues: Collegue[] = listeCollegues;

private subject = new Subject<Vote>();



constructor() { }

lister(): Observable<Collegue[]>  {
  // Retourne une liste fictives de collègues

  return of(this.listeCollegues);

}

donnerUnAvis(collegue: Collegue, avis: Avis):Observable <Collegue>  {
  if (Avis.AIMER === avis) {
    collegue.score += 10;
  } else if (Avis.DETESTER === avis) {
    collegue.score -= 10;
  }
  this.subject.next({
    "collegue" : {...collegue},
    "avis" : avis
  });
  return of (collegue);
}

listerVotes(): Observable<Vote> {  //subject.asObservable()



  return this.subject.asObservable();
}
}
