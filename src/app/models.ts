
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

export class NouveauCollegue {
  matricule?: string;
  pseudo?: string;
  imageUrl?: string;

  constructor(matricule?, pseudo?, imageUrl?){
    this.matricule = matricule ;
    this.pseudo = pseudo;
    this.imageUrl = imageUrl;
  }

}
