import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeColleguesComponentComponent } from './liste-collegues-component/liste-collegues-component.component';
import { AccueilComponentComponent } from './accueil-component/accueil-component.component';
import { ScorePipe } from './pipes/score.pipe';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { CompteurComponent } from './compteur/compteur.component';
import { HttpClientModule } from '@angular/common/http';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { PseudoMatriculeValidatorDirective } from './validators/pseudo-matricule-validator.directive';
import { FormsModule }   from '@angular/forms';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { DescriptionComponent } from './description/description.component';



@NgModule({

  declarations: [
    AppComponent,  AvisComponent, CollegueComponent, ListeColleguesComponentComponent, AccueilComponentComponent, ScorePipe, HistoriqueVotesComponent, CompteurComponent, NouveauCollegueTemplateFormComponent, PseudoMatriculeValidatorDirective, MenuComponentComponent, DescriptionComponent,
  ],
  imports: [    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


