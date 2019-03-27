import { Injectable } from '@angular/core';
import { Collegue, Avis, Vote } from '../models';
import { Observable, from, of, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  // TODO alimenter la liste de collègues
  listeCollegues: Collegue[] = [
    {
      pseudo: 'Yoann',
      score: 500,
      photoUrl: 'http://s1.lprs1.fr/images/2017/11/08/7379523_1-0-307415534_1000x625.jpg'
    },
    {
      pseudo: 'Youcef',
      score: 600,
      photoUrl: 'https://images.radio-canada.ca/q_auto,w_1600/v1/ici-info/16x9/simba-le-roi-lion-2019-disney.jpg'
    },
    {
      pseudo: 'Amandine',
      score: 700,
      photoUrl: 'http://www.mytexte.com/img_petit-photo/petit0362685001258249257.jpg'
    },
    {
      pseudo: 'Mel',
      score: 300,
      photoUrl: 'https://i2.wp.com/www.opnminded.com/wp-content/uploads/2018/02/raleurs-03.jpg?resize=748%2C454&ssl=1'
    },
    {
      pseudo: 'Melanie',
      score: 300,
      photoUrl: 'https://p8.storage.canalblog.com/80/08/149684/83541204_o.jpg'
    },
    {
      pseudo: 'Aniss',
      score: 300,
      photoUrl: 'http://static.hitek.fr/img/actualite/w_21-animaux-inhabituels-dont-vous-nauriez-jamais-soupconne-lexistence41.jpg'
    },
    {
      pseudo: 'Lionel',
      score: -500,
      photoUrl: 'https://www.terreetpeuple.com/images/Animaux/ours-brun.jpg'
    },
    {
      pseudo: 'Alexandre ',
      score: -900,
      photoUrl: 'http://image.noelshack.com/fichiers/2018/21/1/1526927277-lama.jpg'
    },
  ];

  // private listeVotes: Vote[] = [
  //   {
  //     collegue: this.listeCollegues[0],
  //     avis: Avis.AIMER,
  //   },
  //   {
  //     collegue: this.listeCollegues[1],
  //     avis: Avis.DETESTER,
  //   },
  //   {
  //     collegue: this.listeCollegues[2],
  //     avis: Avis.AIMER,
  //   },
  //   {
  //     collegue: this.listeCollegues[3],
  //     avis: Avis.DETESTER,
  //   },
  //   {
  //     collegue: this.listeCollegues[4],
  //     avis: Avis.AIMER,
  //   },
  //   {
  //     collegue: this.listeCollegues[5],
  //     avis: Avis.AIMER,
  //   },

  // ]

  constructor() { }

  subjectVote = new Subject<Vote>()

  listerVote(): Observable<Vote> {
    return this.subjectVote.asObservable();
  }

  lister(): Observable<Collegue[]> {
    const obsCollegue$ = of(this.listeCollegues);
    return obsCollegue$;
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Collegue {
    if (avis == Avis.AIMER) {
      collegue.score += 100;
      this.subjectVote.next({ collegue: collegue, avis: avis })
      if (collegue.score >= 1000) {
        // this.hideAimer= true;
      } else {
        // this.hideDetester= false;
      } return collegue
    } else if (avis == Avis.DETESTER) {
      collegue.score -= 100;
      this.subjectVote.next({ collegue: collegue, avis: avis })
      if (collegue.score <= -1000) {
        // this.hideDetester= true;
      } else {
        // this.hideAimer = false;
      } return collegue
    }
  }

}
