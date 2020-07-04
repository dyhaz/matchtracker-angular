import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  env = environment;
  opts = {
    headers: new Headers(),
    method: 'GET', // GET, POST, PUT, DELETE
  };

  constructor() {
    this.opts.headers = new Headers();
    this.opts.headers.append('X-Auth-Token', this.env.apiToken);
  }

  getPlayers(idTeam: number) {
    return from(
      fetch(`${this.env.apiUrl}teams/${idTeam}/players`, {...this.opts})
    ).pipe(map(response => response.json()));
  }

  getPlayer(id: number) {
    return from(
      fetch(`${this.env.apiUrl}players/${id}`, {...this.opts})
    ).pipe(map(response => response.json()));
  }
}
