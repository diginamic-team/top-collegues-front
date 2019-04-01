import { Component, OnInit } from '@angular/core';
import { CollegueForm } from '../models';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  collegueForm: CollegueForm = {};
  messageErreur: string = '';
  submit() {
    this._dataService.verificatonForm(this.collegueForm).subscribe( () => {
      this.collegueForm + ' //Envoyé avec succès'
      this.router.navigate(['/accueil']);
    },
    error => {
      this.messageErreur = error.error;
    });

  }
  constructor(private _dataService:DataService, private router: Router) { }

  ngOnInit() {

  }

}
