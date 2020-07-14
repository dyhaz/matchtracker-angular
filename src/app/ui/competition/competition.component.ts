import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppBaseComponent} from '../../app.base.component';
import {AppComponent} from '../../app.component';
import {CompetitionsService} from '../../services/competitions.service';
import {NgxIndexedDBService} from 'ngx-indexed-db';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html'
})
export class CompetitionComponent extends AppBaseComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'competitions';
  listComps: any = [];
  leagues = [2001, 2002, 2003, 2021, 2014, 2015]; // Default competition IDs

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              protected competitionSvc: CompetitionsService,
              protected app: AppComponent,
              protected dbService: NgxIndexedDBService) {
    super(router, activatedRoute, http, app, dbService);
  }

  getFlag(country: string) {
    return this.app.getCtryCode(country);
  }

  processRequest(result: Promise<any>): void {
    this.app.showLoading(result);

    result.then(value => {
      this.listComps = [];
      value.competitions.forEach(val => {
        if (val.emblemUrl || this.leagues.includes(val.id)) {
          this.listComps.push(val);
        }
      });
    });

    result.catch(() => {
      this.app.toggleError();
    });
  }

  ngAfterViewInit(): void {
    this.app.showLoading();

    /**
     * List all competitions
     */
    this.competitionSvc.getCompetitions().subscribe(res => {
      this.processRequest(res);
    }, () => {
      this.app.toggleError();
    });
  }

  ngOnDestroy(): void {
    this.listComps = [];
  }

}
