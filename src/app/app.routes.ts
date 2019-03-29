import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import {PageDetailComponent} from './page-detail/page-detail.component' ;

export const ROUTES: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'formulaire', component: NouveauCollegueTemplateFormComponent },
    { path: 'collegues/:pseudo', component: PageDetailComponent},
    // redirection par défault vers /accueil
    { path: '', pathMatch: 'full', redirectTo: '/accueil' },
];
