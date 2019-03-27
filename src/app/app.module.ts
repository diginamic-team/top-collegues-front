import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeColleguesComponentComponent } from './liste-collegues-component/liste-collegues-component.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ScorePipe } from './pipes/score.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { HistoriquePipe } from './pipes/historique.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponentComponent,
    AccueilComponent,
    ScorePipe,
    HistoriqueVotesComponent,
    HistoriquePipe
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
