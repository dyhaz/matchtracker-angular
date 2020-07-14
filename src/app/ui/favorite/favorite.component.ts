import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppBaseComponent} from '../../app.base.component';
import { ToastrService } from 'ngx-toastr';
import {AppComponent} from '../../app.component';
import StringUtils from '../../shared/helpers/string-utils';
import {NgxIndexedDBService} from 'ngx-indexed-db';
declare var $: any;

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html'
})
export class FavoriteComponent extends AppBaseComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'fav';
  listTeam: any;
  listComps: any = [];
  noFavComp = false;
  noFavTeam = false;
  teamDescs: any = new Array(1000).fill('');

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              private toastr: ToastrService,
              protected app: AppComponent,
              protected dbService: NgxIndexedDBService) {
    super(router, activatedRoute, http, app, dbService);
  }

  ngAfterViewInit(): void {

    setTimeout(() => {
      $(document).ready(() => {
        $('.tabs').tabs();
      });
    }, 100);

    this.dbService.getAll('team').then(val => {
      this.listTeam = val;
      val.forEach((team: any, key) => {
        this.teamDescs[key] = team.description;
      });
    });

    this.dbService.getAll('competition').then(val => {
      this.listComps = val;
    });

    setTimeout(() => {
        this.noFavComp = this.listComps.length === 0;
        this.noFavTeam = this.listTeam == null || this.listTeam.length === 0;
    }, 5000);
  }

  favorite(type: string, id: number): void {
    this.toastr.success('Item has been removed from your favorites', 'Success!');
    this.dbService.delete(type.toLowerCase(), id).then(
      () => {
      });
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

  resetPage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  ngOnDestroy(): void {
    this.listComps = [];
    this.listTeam = null;
    this.teamDescs = null;
  }
}
