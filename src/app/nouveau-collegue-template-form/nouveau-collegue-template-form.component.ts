import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import {  Router } from '@angular/router';
import { ValidationErrors } from '@angular/forms';

class CollegueForm {
  matricule: string;
  pseudo: string;
  image: string;
}

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {
  newCollegue: CollegueForm = new CollegueForm();
  constructor(private data: DataService, private router: Router) { }
  err = false;
  message: string;
  type: string;
  ngOnInit() {
  }

  check(error: ValidationErrors | null) {
    if (error != null && error.pseudoMatriculeIdentique && this.newCollegue.pseudo != null) {
        this.type = 'warning';
        this.message = 'pseudo et matricule identique';
        return true;
      } else {
        this.err = false;
        return false;
      }
  }
  
  submit() {
    this.data
      .insertNewCollegue(
        this.newCollegue.matricule,
        this.newCollegue.pseudo,
        this.newCollegue.image
      )
      .subscribe(
        () => {
          this.type = 'success',
          this.message = 'Collègue ajouté',
          this.err = true;
        },
        error => {
          this.type = 'warning';
          this.message = error.error;
          this.err = true;
          setTimeout(() => {
            this.router.navigate(['/accueil']);
          }, 1000);
        }
      );
  }
  // close(){
  //   this.err = false;
  // }

}
