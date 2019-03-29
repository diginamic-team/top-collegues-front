export interface Collegue {

  pseudo: string;
  score: number;
  photoUrl: string;

}

export interface NewCollegue {

  matricule?: string;
  pseudo?: string;
  photoUrl?: string;
}


export enum Avis {

  AIME="AIMER",
  DETESTE="DETESTER",
}

export const listeCollegue: Collegue[] = [
  // {
  //   pseudo: 'licorne',
  //   score: 2,
  //   photoUrl: 'https://www.eve-grenoble.fr/images/2018/passion-de-licorne-t-shirt-enfant-licorne-dab-3603071959097_740x.jpg',
  // },
  // {
  //   pseudo: 'peter pan',
  //   score: 3,
  //   photoUrl: 'https://i.pinimg.com/originals/df/9a/91/df9a9108224cdfa518c8e517cb67c20f.jpg',
  // },
  // {
  //   pseudo: 'shrek',
  //   score: 10,
  //   photoUrl: 'https://pbs.twimg.com/profile_images/2293448946/image.jpg',
  // },
  // {
  //   pseudo: 'chat potté',
  //   score: 8,
  //   photoUrl: 'https://i.pinimg.com/originals/0b/b7/33/0bb733d83ffdb51dae9317c45c8dba2b.jpg',
  // },
];

export interface Vote {

  collegue: Collegue;
  avis: Avis;

}
