import {Component, Input, OnInit} from '@angular/core';
import {PersonModel} from "../../model/person-model";
import {AbstractPersonManagement} from "../abstract-person-management";
import {CounterService} from "../../service/counter.service";

@Component({
  selector: 'app-person-avec-as',
  templateUrl: './person-avec-as.component.html',
  styleUrls: ['./person-avec-as.component.scss']
})
export class PersonAvecAsComponent extends AbstractPersonManagement implements OnInit {

  ngOnInit(): void {
  }

}
