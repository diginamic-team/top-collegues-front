import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component'
@NgModule({
  declarations: [
    AppComponent,  AvisComponent, CollegueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
