import { Component } from '@angular/core';
import { Collegue } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegues-front';
  unCollegue: Collegue = {
    pseudo: 'aniss', 
    score: 188888888888888888888888888888000000,
  photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Emblem_of_Saudi_Arabia.svg/2000px-Emblem_of_Saudi_Arabia.svg.png'
  };

  // saisie(val: string) {
  //   console.log('app component', val);
  // }
}
