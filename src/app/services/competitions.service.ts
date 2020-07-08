import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {
  env = environment;
  opts = {
    headers: new Headers(),
    method: 'GET', // GET, POST, PUT, DELETE
  };

  constructor() {
    this.opts.headers = new Headers();
    this.opts.headers.append('X-Auth-Token', this.env.apiToken);
  }

  getCompetitions() {
    return from(
      fetch(`${this.env.apiUrl}competitions`, {...this.opts})
    ).pipe(map(response => response.json()));
  }

  getCompetition(id: number) {
    return from(
      fetch(`${this.env.apiUrl}competitions/${id}`, {...this.opts})
    ).pipe(map(response => response.json()));
  }

  getCompetitionDescription(competitionName: string) {
    return from(
      fetch(`${this.env.wikiApiUrl}page/mobile-sections/${competitionName}`)
    ).pipe(map(response => response.json()));
  }

  getStandings(idCompetition: number, status?: string) {
    return from(
      fetch(`${this.env.apiUrl}competitions/${idCompetition}/standings${status ? '?status=' + status : ''}`, {...this.opts})
    ).pipe(map(response => response.json()));
  }

  getMatches(idCompetition: number) {
    return from(
      fetch(`${this.env.apiUrl}competitions/${idCompetition}/matches`, {...this.opts})
    ).pipe(map(response => response.json()));
  }
}
