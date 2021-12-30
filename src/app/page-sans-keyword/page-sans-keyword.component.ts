import { Component, OnInit } from '@angular/core';
import {PersonService} from "../service/person.service";
import {PersonModel} from "../model/person-model";
import {CounterService} from "../service/counter.service";

@Component({
  selector: 'app-page-sans-keyword',
  templateUrl: './page-sans-keyword.component.html',
  styleUrls: ['./page-sans-keyword.component.scss']
})
export class PageSansKeywordComponent implements OnInit {

  constructor(private personService:PersonService, private counterService:CounterService) { }

  ngOnInit(): void {
    console.log('Reinit counter', this);
    this.counterService.count=0;
  }

  ngAfterViewChecked(){
    console.warn('AfterViewChecked : Le nombre d\'opération est '+this.counterService.count, this);
    this.counterService.count=0;
  }

  get personList():PersonModel[]{
    return this.personService.providePerson();
  }
}
