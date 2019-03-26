export interface Collegue {

  pseudo: string;
  score: number;
  photoUrl: string;

}

export enum Avis {

  AIME,
  DETESTE,
}

export const listeCollegue: Collegue[] = [
  {
    pseudo: 'licorne',
    score: 2,
    photoUrl: 'https://www.eve-grenoble.fr/images/2018/passion-de-licorne-t-shirt-enfant-licorne-dab-3603071959097_740x.jpg',
  },
  {
    pseudo: 'peter pan',
    score: 3,
    photoUrl: 'https://i2.cdscdn.com/pdt2/4/5/7/1/400x400/auc2009216181457/rw/peter-pan-162cms-poster-cartonne-grandeur-nature.jpg',
  },
  {
    pseudo: 'shrek',
    score: 10,
    photoUrl: 'https://pbs.twimg.com/profile_images/2293448946/image.jpg',
  },
  {
    pseudo: 'chat potté',
    score: 8,
    photoUrl: 'https://figurinepop.com/public/puss1_2.jpg',
  },
];
