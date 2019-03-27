import { Injectable } from '@angular/core';
import { Collegue, Avis, Vote } from '../models';
import { Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  listeCollegues: Collegue[] = [
    {
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
  ];

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

  constructor() { }

  lister(): Observable<Collegue[]>  {

    return of(this.listeCollegues);
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {

    if(avis === Avis.AIMER ){
      collegue.score += 50;
    }else if(avis === Avis.DETESTER){
      collegue.score -= 80;
    }

    this.listeVotes.next({"collegue" : collegue, "avis" : avis }) ;

    return of(collegue);

  }

  listerVotes(): Observable<Vote> {
    return this.listeVotes.asObservable();
  }

}
