import {OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from './app.component';
import { NgxIndexedDBService } from 'ngx-indexed-db';

export class AppBaseComponent implements OnInit {

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              protected app: AppComponent,
              protected dbService: NgxIndexedDBService) {
  }

  ngOnInit(): void {
  }

  public navigate(command: string) {
    this.router.navigate([command]);
  }
}
