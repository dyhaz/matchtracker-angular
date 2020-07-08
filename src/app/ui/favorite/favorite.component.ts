import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppBaseComponent} from '../../app.base.component';
import { ToastrService } from 'ngx-toastr';
import {AppComponent} from '../../app.component';
import {TeamsService} from '../../services/teams.service';
import StringUtils from '../../shared/helpers/string-utils';
import {CompetitionsService} from '../../services/competitions.service';
declare var $: any;

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html'
})
export class FavoriteComponent extends AppBaseComponent implements OnInit, AfterViewInit {
  title = 'fav';
  listTeam: any;
  listComps: any = [];
  teamDescs: any = new Array(1000).fill('');

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              protected teamService: TeamsService,
              protected compService: CompetitionsService,
              private toastr: ToastrService,
              protected app: AppComponent) {
    super(router, activatedRoute, http, app);
  }

  processTeams(result: Promise<any>): void {
    this.app.showLoading(result);

    result.then(value => {
      this.listTeam = value;
      this.listTeam.teams = value.teams.slice(0, 10);
      this.showDescriptions();
    });

    result.catch(() => {
      this.app.toggleError();
    });
  }

  processComps(result: Promise<any>): void {
    this.app.showLoading(result);

    result.then(value => {
      this.listComps = value.competitions.slice(0, 10);
    });

    result.catch(() => {
      this.app.toggleError();
    });
  }

  ngAfterViewInit(): void {

    setTimeout(() => {
      $(document).ready(() => {
        $('.tabs').tabs();
      });
    }, 100);

    this.app.showLoading();

    this.teamService.getTeams().subscribe(
      res => {
        this.processTeams(res);
      }
    );

    this.compService.getCompetitions().subscribe(
      res => {
        this.processComps(res);
      }
    );
  }

  showDescriptions() {
    this.teamDescs = new Array(1000).fill('');

    if (this.listTeam.teams) {
      this.listTeam.teams.forEach((team, key) => {
        this.teamService.getTeamDescription(team.name).subscribe(res => {
          res.then(val => {
            this.teamDescs[key] = val.lead.sections[0].text.replace(/<[^>]*>/g, '').replace(/\(listen\)/g, '');
          });
        });
      });
    }
  }

  favorite(type: string, id: number): void {
    this.toastr.success('Item has been removed from your favorites', 'Success!');
  }

  getCurrentUrl(): string {
    return window.location.href;
  }

  getFlag(country: string) {
    return this.app.getCtryCode(country);
  }

  truncate(val: string) {
    return StringUtils.truncate(val, 200);
  }
}
