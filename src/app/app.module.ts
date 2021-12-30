import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAvecKeywordComponent } from './page-avec-keyword/page-avec-keyword.component';
import { PageSansKeywordComponent } from './page-sans-keyword/page-sans-keyword.component';
import { PageExplicationComponent } from './page-explication/page-explication.component';
import { PersonSansAsComponent } from './commons/person-sans-as/person-sans-as.component';
import { PersonAvecAsComponent } from './commons/person-avec-as/person-avec-as.component';
import { IconComponent } from './commons/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAvecKeywordComponent,
    PageSansKeywordComponent,
    PageExplicationComponent,
    PersonSansAsComponent,
    PersonAvecAsComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
