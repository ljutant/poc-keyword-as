import {Component, Input, OnInit} from '@angular/core';
import {PersonModel} from "../../model/person-model";
import {AbstractPersonManagement} from "../abstract-person-management";

@Component({
  selector: 'app-person-sans-as',
  templateUrl: './person-sans-as.component.html',
  styleUrls: ['./person-sans-as.component.scss']
})
export class PersonSansAsComponent extends AbstractPersonManagement implements OnInit {


  ngOnInit(): void {
    //Faire un premier composant qui prend person en input et mettre des getteur partout (voir pour mettre un service de detail de personne
  }

}
