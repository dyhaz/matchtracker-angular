import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';
import {retrieve} from '../shared/helpers/http-utils';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  env = environment;

  constructor() {
  }

  getPlayers(idTeam: number) {
    return from(
      retrieve(`${this.env.apiUrl}teams/${idTeam}/players`)
    ).pipe(map(response => response.json()));
  }

  getPlayer(id: number) {
    return from(
      retrieve(`${this.env.apiUrl}players/${id}`)
    ).pipe(map(response => response.json()));
  }

  getPlayerByName(firstName: string, lastName: string) {
    return from(
      retrieve(`${this.env.pushMessageApiUrl}v1/api/players/findOne?_where=(_lastName,like,${lastName})~and(_firstName,like,${firstName})`)
    ).pipe(map(response => response.json()));
  }
}
