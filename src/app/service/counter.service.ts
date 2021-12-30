import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  public count:number = 0;
}
