import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-count-votes',
  templateUrl: './count-votes.component.html',
  styleUrls: ['./count-votes.component.css']
})
export class CountVotesComponent implements OnInit {
  count: number;
  constructor(private data: DataService) { }

  ngOnInit() {

    if (localStorage.getItem('compteur') != null) {
      this.count = Number(localStorage.getItem('compteur'));
    } else {
      this.count = 0;
    }
    this.data.listerVotes().subscribe(() => {
      this.count++ ,
      localStorage.setItem('compteur', this.count.toString());
    },
      () => alert('observable mal passe'),
    );
    // this.count = 0;
    // this.data.listerVotes().subscribe(() => this.count++,
    //   () => alert('Failed observable !'),
    // );

  }

}
