import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { DescriptionComponent } from './description/description.component';


export const ROUTES: Routes = [
        { path: 'accueil', component: AccueilComponent },
        { path: 'form', component: NouveauCollegueTemplateFormComponent },
        { path: 'collegues/:pseudo', component: DescriptionComponent },
       ];
