export interface Collegue {

  photo: string;
  pseudo: string;
  score: number;
}

export enum Avis {
  AIMER,
  DETESTER
}
export interface Vote {
  collegue: Collegue;
  avis: Avis;
}
