import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeCollegueComponent } from './liste-collegue/liste-collegue.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ScorePipe } from './pipes/score.pipe';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { CompteurVoteComponent } from './compteur-vote/compteur-vote.component';
import { HttpClientModule } from '@angular/common/http';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';



@NgModule({
  imports: [
    BrowserModule, NgbModule,
    HttpClientModule,
    FormsModule, RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent,
    AvisComponent,
    CollegueComponent,
    ListeCollegueComponent,
    AccueilComponent,
    ScorePipe,
    HistoriqueVotesComponent,
    CompteurVoteComponent,
    NouveauCollegueTemplateFormComponent,
    MenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
