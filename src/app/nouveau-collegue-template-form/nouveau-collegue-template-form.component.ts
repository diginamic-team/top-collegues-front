import { Component, OnInit, Input } from '@angular/core';
import { NouveauCollegue } from '../models';
import { CollegueComponent } from '../collegue/collegue.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  nouveauCollegue: NouveauCollegue = {} ;

  constructor(private _service: DataService) { }

  ngOnInit() {
  }

  submit() {
    // console.log(this.collegue.matricule, this.collegue.pseudo, this.collegue.imageUrl) ;
    this._service.creerCollegue(this.nouveauCollegue).subscribe(
      error => console.log(error),
    );
  }



}
