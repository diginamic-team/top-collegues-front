import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { TestcssComponent } from './testcss/testcss.component';

@NgModule({
  declarations: [AppComponent, TestcssComponent],
  imports: [BrowserModule,
  NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
