import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { DetailCollegueComponent } from './detail-collegue/detail-collegue.component';


export const ROUTES: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'form-template', component: NouveauCollegueTemplateFormComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'collegue/:pseudo', component: DetailCollegueComponent },
];
