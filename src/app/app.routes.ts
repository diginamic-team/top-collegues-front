import { Routes } from '@angular/router';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { AccueilComponentComponent } from './accueil-component/accueil-component.component';

export const ROUTES: Routes = [
  { path: 'accueil', component: AccueilComponentComponent },
  { path: 'form', component: NouveauCollegueTemplateFormComponent },
];
