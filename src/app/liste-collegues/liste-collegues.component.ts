import {Component, Input} from '@angular/core';
import { Collegue } from '../models';

@Component({
    selector: 'app-liste-collegues',
    templateUrl: './liste-collegues.component.html',

})
export class ListeColleguesComponent {
@Input() listeCol:Collegue[];

}