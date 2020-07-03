import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  env = environment;
  opts = {
    headers: new Headers(),
    method: 'GET', // GET, POST, PUT, DELETE
  };

  constructor() {
    this.opts.headers = new Headers();
    this.opts.headers.append('X-Auth-Token', this.env.apiToken);
  }

  getTeams() {
    return from(
      fetch(`${this.env.apiUrl}teams`, {...this.opts})
    ).pipe(map(response => response.json()));
  }

  getTeamsByLeague(idLeague: number) {
    return from(
      fetch(`${this.env.apiUrl}teams/?league=${idLeague}`, {...this.opts})
    ).pipe(map(response => response.json()));
  }

  getTeam(id: number) {
    return from(
      fetch(`${this.env.apiUrl}teams/${id}`, {...this.opts})
    ).pipe(map(response => response.json()));
  }
}
