import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageExplicationComponent} from "./page-explication/page-explication.component";
import {PageAvecKeywordComponent} from "./page-avec-keyword/page-avec-keyword.component";
import {PageSansKeywordComponent} from "./page-sans-keyword/page-sans-keyword.component";

const routes: Routes = [
  {path:'', component:PageExplicationComponent},
  {path:'avec', component:PageAvecKeywordComponent},
  {path:'sans', component:PageSansKeywordComponent},
  {path:'**', component:PageExplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
