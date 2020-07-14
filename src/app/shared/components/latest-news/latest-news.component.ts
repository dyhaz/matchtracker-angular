import {AfterViewInit, Component, HostListener, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CompetitionsService} from '../../../services/competitions.service';
import {AppComponent} from '../../../app.component';
import {AppBaseComponent} from '../../../app.base.component';
import {Subscription} from 'rxjs';
import StringUtils from '../../helpers/string-utils';
import {NgxIndexedDBService} from 'ngx-indexed-db';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html'
})
export class LatestNewsComponent extends AppBaseComponent implements AfterViewInit, OnDestroy {
  matchSubscription: Subscription;
  matchOfTheDay: any = [];
  leagues = [2001, 2002, 2003, 2021, 2014, 2015]; // Default competition IDs
  isLoadingMatches = false;

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              protected competitionSvc: CompetitionsService,
              protected app: AppComponent,
              protected dbService: NgxIndexedDBService) {
    super(router, activatedRoute, http, app, dbService);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    /**
     * Lazy loading
     */
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.isLoadingMatches) {
      this.leagues.forEach(league => {
        if (!Object.keys(this.matchOfTheDay).includes(league + '')) {
          this.getMatches(league);
        }
      });
    }
  }

  trunc(name): string {
    return StringUtils.truncate(name, 20);
  }

  processRequest(result: Promise<any>): void {
    result.then(val => {
      const listMatchesTmp = [];

      val.matches.forEach(match => {
        match.competition = val.competition;
        listMatchesTmp.push(match);

      });
      this.isLoadingMatches = false;
      this.matchOfTheDay[val.competition.id] = listMatchesTmp;
    }, () => {
      this.matchSubscription.unsubscribe();
      this.isLoadingMatches = false;
    });

    result.catch(() => {
      this.app.toggleError();
    });
  }

  getMatches(idComp: number) {
    this.isLoadingMatches = true;
    const date = new Date();
    date.setDate(date.getDate() + 7);

    this.matchSubscription = this.competitionSvc.getMatchesByDateRange(idComp, (new Date()).toISOString().split('T')[0],
      date.toISOString().split('T')[0])
      .subscribe(
        res => {
          this.processRequest(res);
        }, () => {
          setTimeout(() => this.getMatches(idComp), 1000);
        }
      );
  }

  getFlag(country: string) {
    return this.app.getCtryCode(country);
  }

  ngAfterViewInit(): void {
    this.matchOfTheDay = [];
  }

  ngOnDestroy(): void {
    this.matchOfTheDay = [];

    if (this.matchSubscription) {
      this.matchSubscription.unsubscribe();
    }
  }
}
