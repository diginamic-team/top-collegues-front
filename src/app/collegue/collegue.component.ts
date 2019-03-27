import { Component, OnInit, Input } from '@angular/core';
import { Avis, Collegue } from '../model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
@Input() col: Collegue;
  constructor(private _dataSrv: DataService) { }

  ngOnInit() {
  }

  traiterAvisEmis(unAvis:Avis){
    this._dataSrv.donnerUnAvis(this.col, unAvis).subscribe(
      c => this.col = c
    );
  }

}
