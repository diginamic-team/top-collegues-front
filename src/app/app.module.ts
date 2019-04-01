import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeColleguesComponentComponent } from './liste-collegues-component/liste-collegues-component.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ScorePipe } from './pipes/score.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { HistoriquePipe } from './pipes/historique.pipe';
import { CompteurVoteComponent } from './compteur-vote/compteur-vote.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponentComponent,
    AccueilComponent,
    ScorePipe,
    HistoriqueVotesComponent,
    HistoriquePipe,
    CompteurVoteComponent,
    NouveauCollegueTemplateFormComponent,
    MenuComponentComponent,
    PageDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
