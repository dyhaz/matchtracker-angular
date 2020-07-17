import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';
import {retrieve} from '../shared/helpers/http-utils';

@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {
  env = environment;

  constructor() {
  }

  getCompetitions() {
    return from(
      retrieve(`${this.env.apiUrl}competitions`)
    ).pipe(map(response => response.json()));
  }

  getCompetition(id: number) {
    return from(
      retrieve(`${this.env.apiUrl}competitions/${id}`)
    ).pipe(map(response => response.json()));
  }

  getCompetitionDescription(competitionName: string) {
    return from(
      retrieve(`${this.env.wikipedia.endpoint}page/mobile-sections/${competitionName}`)
    ).pipe(map(response => response.json()));
  }

  getStandings(idCompetition: number, status?: string) {
    return from(
      retrieve(`${this.env.apiUrl}competitions/${idCompetition}/standings${status ? '?status=' + status : ''}`)
    ).pipe(map(response => response.json()));
  }

  getMatches(idCompetition: number) {
    return from(
      retrieve(`${this.env.apiUrl}competitions/${idCompetition}/matches`)
    ).pipe(map(response => response.json()));
  }

  getMatchesByDateRange(idCompetition: number, date1, date2) {
    return from(
      retrieve(`${this.env.apiUrl}competitions/${idCompetition}/matches?dateFrom=${date1}&dateTo=${date2}`)
    ).pipe(map(response => response.json()));
  }
}
