import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AccueilComponent } from '../accueil/accueil.component';
import { NouveauCollegueTemplateFormComponent } from '../nouveau-collegue-template-form/nouveau-collegue-template-form.component';


export const ROUTES: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'form-template', component: NouveauCollegueTemplateFormComponent}

]


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
