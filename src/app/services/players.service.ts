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
}
