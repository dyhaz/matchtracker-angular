import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';
import {retrieve} from '../shared/helpers/http-utils';
@Injectable({
  providedIn: 'root'
})
export class AreasService {
  env = environment;

  constructor() { }

  getAreas() {
    return from(
      retrieve(`${this.env.apiUrl}areas`)
    ).pipe(map(response => response.json()));
  }

  getArea(id: number) {
    return from(
      retrieve(`${this.env.apiUrl}areas/${id}`)
    ).pipe(map(response => response.json()));
  }
}
