export interface Collegue{
    pseudo: string;
    score: number;
    imageURL:string;
}

export enum Avis{
    AIMER,DETESTER
}

export interface Vote {
  collegue: Collegue;
  avis: Avis;
}
