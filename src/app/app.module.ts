import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoveComponent } from './love/love.component';
import { HateComponent } from './hate/hate.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListeColleguesComponentComponent } from './liste-collegues-component/liste-collegues-component.component';
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ScorePipe } from './pipes/score.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoveComponent,
    HateComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponentComponent,
    ListeColleguesComponent,
    AccueilComponent,
    ScorePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
