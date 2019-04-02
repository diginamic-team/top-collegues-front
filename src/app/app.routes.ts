import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { DescriptionComponent } from './description/description.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
        { path: 'accueil', component: AccueilComponent },
        { path: 'form', component: NouveauCollegueTemplateFormComponent },
        { path: 'formReactive', component: ReactiveFormsComponent },
        { path: 'collegues/:pseudo', component: DescriptionComponent },
       ];
