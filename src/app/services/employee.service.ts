import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';
import {retrieve, submitChange, rem, submitWithData} from '../shared/helpers/http-utils';
import {UserDto} from '../shared/dto/UserDto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  env = environment;

  constructor() {
  }

  getUsers(page = 1) {
    return from(
      retrieve(`${this.env.apiUrl}users?page=${page}`)
    ).pipe(map(response => response.json()));
  }

  getUser(id: number) {
    return from(
      retrieve(`${this.env.apiUrl}users/${id}`)
    ).pipe(map(response => response.json()));
  }

  addUser(user: UserDto) {
    return from(
      submitWithData(`${this.env.apiUrl}users`, user)
    ).pipe(map(response => response.json()));
  }

  changeUser(user: UserDto) {
    return from(
      submitChange(`${this.env.apiUrl}users`, user)
    ).pipe(map(response => response.json()));
  }

  removeUser(id: number) {
    return from(
      rem(`${this.env.apiUrl}users/${id}`)
    ).pipe(map(response => response.json()));
  }
}
