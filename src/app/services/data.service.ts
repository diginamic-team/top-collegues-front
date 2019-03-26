import { Injectable } from '@angular/core';
import { Avis, Collegue } from '../model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

// TODO alimenter la liste de collègues
listeCollegues: Collegue[] = []

constructor() { }

lister(): Collegue[]  {
  // TODO retourner une liste fictives de collègues
}

donnerUnAvis(collegue: Collegue, avis: Avis): Collegue  {
  // TODO mettre à jour le score du collègue et retourner le collègue à jour
}

}
