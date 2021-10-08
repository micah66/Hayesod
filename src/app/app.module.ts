import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularHelpComponent } from './components/angular-help/angular-help.component';
import { VocabularyWordsComponent } from './components/vocabulary-words/vocabulary-words.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularHelpComponent,
    VocabularyWordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
