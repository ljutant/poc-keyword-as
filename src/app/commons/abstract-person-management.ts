import {Directive, Input, Output} from "@angular/core";
import {PersonModel} from "../model/person-model";
import {AddressModel} from "../model/address-model";
import {ContactModel} from "../model/contact-model";
import {CounterService} from "../service/counter.service";

//https://angular.io/guide/migration-undecorated-classes
//https://v9.angular.io/guide/deprecations#undecorated-base-classes-using-angular-features
@Directive()
export abstract class AbstractPersonManagement {

  operationCount:number = 0;

  public constructor(private counterService:CounterService){}


  @Input()
  person!: PersonModel;

  ngAfterViewChecked(){
    console.debug('AfterViewChecked (for '+this.person.name+'), le nombre d\'operation est : '+this.operationCount, this);
    this.counterService.count+=this.operationCount;
  }

  getIcone():string {
    this.operationCount ++;
    console.debug('Get Icon (for '+this.person.name+')', this.operationCount);
    return this.person.gender === 'M' ? 'man' : 'woman';
  }

  getContact():ContactModel|undefined {
    this.operationCount ++;
    console.debug('Get Contact (for '+this.person.name+')', this.operationCount);
    return this.person.contact;
  }

  getAdresse():AddressModel|undefined {
    this.operationCount ++;
    console.debug('Get Address (for '+this.person.name+')', this.operationCount);
    return this.person.contact?.adresse;
  }
}
