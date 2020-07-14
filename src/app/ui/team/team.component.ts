import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppBaseComponent} from '../../app.base.component';
import {TeamsService} from '../../services/teams.service';
import {AppComponent} from '../../app.component';
import StringUtils from '../../shared/helpers/string-utils';
import {NgxIndexedDBService} from 'ngx-indexed-db';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html'
})
export class TeamComponent extends AppBaseComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'team';
  listTeam: any = [];

  itemsPerPage = 3;
  teamDescs: any = new Array(this.itemsPerPage).fill('');
  currentPage = 0;
  pages = [];
  begin = 0;
  end = 0;

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              protected teamService: TeamsService,
              protected app: AppComponent,
              protected dbService: NgxIndexedDBService) {
    super(router, activatedRoute, http, app, dbService);
  }

  truncate(val: string) {
    return StringUtils.truncate(val, 200);
  }

  getFlag(country: string) {
    return this.app.getCtryCode(country);
  }

  getNumOfPages() {
    if (typeof this.listTeam.teams === 'undefined') {
      return 0;
    }
    return Math.ceil(this.listTeam.teams.length / this.itemsPerPage);
  }

  createPagination() {
    const res = [];
    for (let i = 0; i < this.getNumOfPages(); i++) {
      res.push(i + 1);
    }
    this.pages = res;
    this.goToPage(1);
  }

  goToPage(page: number) {
    this.currentPage = page - 1;
    this.begin = ((this.currentPage) * this.itemsPerPage);
    this.end = this.begin + this.itemsPerPage;
    this.showDescriptions();
  }

  showDescriptions() {
    this.teamDescs = new Array(this.itemsPerPage).fill('');

    if (this.listTeam.teams) {
      this.listTeam.teams.slice(this.begin, this.end).forEach((team, key) => {
        this.teamService.getTeamDescription(team.name).subscribe(res => {
          res.then(val => {
            this.teamDescs[key] = val.lead.sections[0].text.replace(/<[^>]*>/g, '').replace(/\(listen\)/g, '');
          });
        });
      });
    }
  }

  processRequest(result: Promise<any>): void {
    this.app.showLoading(result);

    result.then(value => {
      this.listTeam = value;
      this.createPagination();
    });

    result.catch(() => {
      this.app.toggleError();
    });
  }

  ngAfterViewInit(): void {
    this.app.showLoading();

    if (this.activatedRoute.snapshot.paramMap.get('league')) {
      /**
       * List teams by league
       */
      const league = parseInt(this.activatedRoute.snapshot.paramMap.get('league'), 10);
      this.teamService.getTeamsByLeague(league).subscribe(res => {
        this.processRequest(res);
      });
    } else {
      /**
       * List all teams
       */
      this.teamService.getTeams().subscribe(res => {
        this.processRequest(res);
      });
    }
  }

  ngOnDestroy(): void {
    this.teamDescs = [];
    this.listTeam = [];
  }

}
