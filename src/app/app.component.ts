import { Component } from '@angular/core';
import { Collegue } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegues-front';

  unCollegueDemo : Collegue ={
    pseudo:'waffle',
    score :2500,
    imageURL:"https://media.giphy.com/media/SwWrhzXVM7NdK/giphy.gif"
  }
}
