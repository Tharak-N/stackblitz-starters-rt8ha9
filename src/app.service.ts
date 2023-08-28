import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class AppService {

  constructor() { }

  getEmployee(){
    return of({name: 'tharak'})
  }

}