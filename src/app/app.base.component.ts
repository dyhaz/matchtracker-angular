import {OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {TeamsService} from './services/teams.service';
import {AppComponent} from './app.component';

export class AppBaseComponent implements OnInit {
  env = environment;
  protected alert: any;

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              protected app: AppComponent) {
  }

  ngOnInit(): void {
  }

  protected navigate(command: string) {
    this.router.navigate([command]);
  }
}
