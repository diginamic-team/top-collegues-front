import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import {PageDetailComponent} from './page-detail/page-detail.component' ;
import { NouveauCollegueReactiveFormComponent } from './nouveau-collegue-reactive-form/nouveau-collegue-reactive-form.component';

export const ROUTES: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'formulaire', component: NouveauCollegueTemplateFormComponent },
    { path: 'collegues/:pseudo', component: PageDetailComponent},
    { path: 'formulaire-reactive', component: NouveauCollegueReactiveFormComponent},

    // redirection par défault vers /accueil
    { path: '', pathMatch: 'full', redirectTo: '/accueil' },
];
