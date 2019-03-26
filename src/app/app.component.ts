import { Component } from '@angular/core';
import { Collegue } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegues-front';
  unCollegueDemo: Collegue={
    pseudo : 'rod',
    score :2000,
    imageUrl: "https://static1.squarespace.com/static/528b9077e4b076ee0b892f2f/t/579ce7ab5016e10ca2a21547/1469900728497/border-collie-close-up?format=750w"
  }

 collegues:Collegue[] = [
  {
    pseudo : 'collegue1',
    score :2000,
    imageUrl: "https://static1.squarespace.com/static/528b9077e4b076ee0b892f2f/t/579ce7ab5016e10ca2a21547/1469900728497/border-collie-close-up?format=750w"
  },

  {
    pseudo : 'collegue2',
    score :2000,
    imageUrl: "https://static1.squarespace.com/static/528b9077e4b076ee0b892f2f/t/579ce7ab5016e10ca2a21547/1469900728497/border-collie-close-up?format=750w"
  },

  {
    pseudo : 'collegue3',
    score :2000,
    imageUrl: "https://static1.squarespace.com/static/528b9077e4b076ee0b892f2f/t/579ce7ab5016e10ca2a21547/1469900728497/border-collie-close-up?format=750w"
  },
  {
    pseudo : 'collegue4',
    score :2000,
    imageUrl: "https://static1.squarespace.com/static/528b9077e4b076ee0b892f2f/t/579ce7ab5016e10ca2a21547/1469900728497/border-collie-close-up?format=750w"
  },

  {
    pseudo : 'collegue5',
    score :2000,
    imageUrl: "https://static1.squarespace.com/static/528b9077e4b076ee0b892f2f/t/579ce7ab5016e10ca2a21547/1469900728497/border-collie-close-up?format=750w"
  },

  {
    pseudo : 'collegue6',
    score :2000,
    imageUrl: "https://static1.squarespace.com/static/528b9077e4b076ee0b892f2f/t/579ce7ab5016e10ca2a21547/1469900728497/border-collie-close-up?format=750w"
  }
]
}
