import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppBaseComponent} from '../../app.base.component';
import {AppComponent} from '../../app.component';
import {NgxIndexedDBService} from 'ngx-indexed-db';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent extends AppBaseComponent implements OnInit {
  title = 'index';

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              protected app: AppComponent,
              protected dbService: NgxIndexedDBService) {
    super(router, activatedRoute, http, app, dbService);
  }
}
