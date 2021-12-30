import { Injectable } from '@angular/core';
import {PersonModel} from "../model/person-model";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  public providePerson():PersonModel[] {
    const tab= [
      {id:"1", name:"Ludo", gender:'M',contact:{telFix:"0200000000", telMobile:"0600000000"}},
      {id:"2", name:"BB", gender:'M', contact:  {telFix:"0211111111", telMobile:"0611111111", adresse:{rue:"RUE DU BOUT DU MONDE", codePostal:"37000", ville:"TOURS", pays:"FRANCE"}}},
      {id:"3", name:"Fanny", gender:'W'}
    ];

    for (let i = 0; i < 20; i++) {
      tab.push({id:i+3+"", name:"Generated"+i, gender:'M', contact:  {telFix:"???????????", telMobile:"???????????", adresse:{rue:"RUE "+i, codePostal:"37000", ville:"TOURS", pays:"FRANCE"}}},
      )
    }

    return tab;
  }
}
