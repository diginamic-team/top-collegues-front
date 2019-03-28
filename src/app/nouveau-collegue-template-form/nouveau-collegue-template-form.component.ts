import { Component, OnInit } from '@angular/core';
import { NewCollegue } from '../models';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  newCollegue: NewCollegue = {};

  submit() {

    console.log(this.newCollegue);
    this._dataSrv.creerCollegue(this.newCollegue).subscribe(
      collegueCree => console.log('super'),
      err => console.log('ooops', err)
    );
  }

  constructor(private _dataSrv: DataService) { }

  ngOnInit() {
  }

}
