import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Collegue } from '../models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  pseudo: string;
  col: Collegue = {};
  constructor(private _dataService: DataService, private _route: ActivatedRoute) {
    this.pseudo = _route.snapshot.paramMap.get('pseudo');
    this._dataService.detailProfil(this.pseudo).subscribe((collegue: Collegue) =>{
      this.col = collegue;
    });

  }

  ngOnInit() {
    this._route.paramMap.subscribe((params: ParamMap) => {
      const pseudo = params.get('pseudo');
    })
  }

}
