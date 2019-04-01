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
import { CountVotesComponent } from './count-votes/count-votes.component';
import { HttpClientModule } from '@angular/common/http';
import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { NouveauCollegueReactiveFormComponent } from './nouveau-collegue-reactive-form/nouveau-collegue-reactive-form.component';
import { PseudoMatriculeValidatorDirective } from './validators/pseudo-matricule-validator.directive';
import { MatriculeValidatorDirective } from './validators/matricule-validator.directive';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { DescriptionComponent } from './description/description.component';
import { FormsModule } from '@angular/forms';

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
    HistoriqueVotesComponent,
    CountVotesComponent,
    NouveauCollegueTemplateFormComponent,
    NouveauCollegueReactiveFormComponent,
    PseudoMatriculeValidatorDirective,
    MatriculeValidatorDirective,
    MenuComponentComponent,
    DescriptionComponent,
    MenuComponentComponent,
    AvisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
