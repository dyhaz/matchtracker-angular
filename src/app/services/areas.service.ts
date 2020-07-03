import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';

declare var footballdataFactory: any;

@Injectable({
  providedIn: 'root'
})
export class AreasService {
  env = environment;
  opts = {
    headers: new Headers(),
    method: 'GET', // GET, POST, PUT, DELETE
    mode: 'no-cors' as RequestMode // the most important option
  };

  constructor() { }

  getAreas() {
    return from(
        fetch(`${this.env.apiUrl}areas`, {...this.opts, method: 'GET'})
    ).pipe(map(response => response.json()));
  }

  getArea(id: number) {
    return from(
      fetch(`${this.env.apiUrl}areas/${id}`, {...this.opts, method: 'GET'})
    ).pipe(map(response => response.json()));
  }
}
