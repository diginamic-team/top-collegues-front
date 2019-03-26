import { Component } from '@angular/core';
import { Collegue } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'top-collegues';
  
  unCollegueDemo: Collegue = {
    pseudo: 'licorne',
    score: 2,
    photoUrl: 'http://media.gettyimages.com/vectors/dabbing-unicorn-vector-design-vector-id954726306?s=170667a&w=1007',
  };
}
