import { Component, OnInit } from '@angular/core';

class MonFormulaire { matricule:string; pseudo:string; score:number; imageURL:string; }

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.css']
})


export class NouveauCollegueTemplateFormComponent implements OnInit {
  monFormulaire : MonFormulaire = new MonFormulaire();

  constructor() { }

  ngOnInit() {

  }



  submit() {
    console.log(this.monFormulaire);
}



}
