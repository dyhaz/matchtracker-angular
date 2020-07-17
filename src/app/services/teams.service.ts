import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';
import {retrieve} from '../shared/helpers/http-utils';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  env = environment;

  constructor() {
  }

  getTeams() {
    return from(
      retrieve(`${this.env.apiUrl}teams`)
    ).pipe(map(response => response.json()));
  }

  getTeamsByLeague(idLeague: number) {
    return from(
      retrieve(`${this.env.apiUrl}teams/?league=${idLeague}`)
    ).pipe(map(response => response.json()));
  }

  getTeam(id: number) {
    return from(
      retrieve(`${this.env.apiUrl}teams/${id}`)
    ).pipe(map(response => response.json()));
  }

  getTeamDescription(teamName: string) {
    return from(
      retrieve(`${this.env.wikipedia.endpoint}page/mobile-sections/${teamName}`)
    ).pipe(map(response => response.json()));
  }

  getTeamPerformances(idTeam: number, status = 'SCHEDULED') {
    return from(
      retrieve(`${this.env.apiUrl}teams/${idTeam}/matches?status=${status}`)
    ).pipe(map(response => response.json()));
  }
}
