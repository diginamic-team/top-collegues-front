export interface Collegue {
    pseudo?: string,
    score?: number,
    photoUrl?: string,
    nom?: string,
    prenom?: string,
    adresse?: string,
    email?: string,
}
export enum Avis {
    AIMER,
    DETESTER,
}

export interface Vote{
    collegue: Collegue,
    avis: Avis,
}
export interface CollegueForm {
    pseudo?: string,
    matricule?: string,
    photo?: string,
}
