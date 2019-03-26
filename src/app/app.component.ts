import { Component } from '@angular/core';
import { Collegue } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bonjour-angular';
  collegueDemo: Collegue = {
    pseudo: 'Alex',
    score: 700,
    photoUrl: 'http://media.lelombrik.net/t/1fbf224e94372be315bd7e55dd67631c/p/01.jpg'
  }
}
