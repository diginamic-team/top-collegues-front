
export interface Collegue {

   pseudo: string;
   score: number;
   imageUrl: string;

}

export enum Avis{
   AIMER,
   DETESTER
}

export interface Vote {
  collegue: Collegue;
  avis: Avis;
}
