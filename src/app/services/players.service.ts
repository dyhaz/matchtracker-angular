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

  constructor() { }

  getPlayers(idTeam: number) {
    return from(
      fetch(`${this.env.apiUrl}lookup_all_players.php?id=${idTeam}`, {...this.opts})
    ).pipe(map(response => response.json()));
  }

  getPlayerDetail(id: number) {
    return from(
      fetch(`${this.env.apiUrl}lookupplayer.php?id=${id}`, {...this.opts})
    ).pipe(map(response => response.json()));
  }
}
