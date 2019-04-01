
export interface Collegue {

   pseudo?: string;
   score?: number;
   imageUrl?: string;
   matricule?: string;
   nom?: string;
   prenom?: string;
   email?: string;
   dateNaissance?: string;
   sexe?: string;
   adresse?: string;
   password?: string;
   photo?: string;
   subalternes?: string[];
   departement?: string;

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
