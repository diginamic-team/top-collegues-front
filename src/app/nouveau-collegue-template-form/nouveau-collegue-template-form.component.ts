import { Component, OnInit } from '@angular/core';
import { CollegueForm } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  collegueForm: CollegueForm = {};

  submit() {
    this._dataService.verificatonForm(this.collegueForm).subscribe();
    console.log(this.collegueForm)
  }
  constructor(private _dataService:DataService) { }

  ngOnInit() {

  }

}
