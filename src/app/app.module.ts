import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoveComponent } from './love/love.component';
// import { HateComponent } from './hate/hate.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
// import { ListeColleguesComponentComponent } from './liste-collegues-component/liste-collegues-component.component';
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ScorePipe } from './pipes/score.pipe';
// import { HistoriqueVoteComponent } from './historique-vote/historique-vote.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    // LoveComponent,
    // HateComponent,
    AvisComponent,
    CollegueComponent,
    // ListeColleguesComponentComponent,
    ListeColleguesComponent,
    AccueilComponent,
    ScorePipe,
    // HistoriqueVoteComponent,
    HistoriqueVotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
