import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppBaseComponent} from '../../app.base.component';
import {AppComponent} from '../../app.component';
import {NgxIndexedDBService} from 'ngx-indexed-db';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html'
})
export class BlogSingleComponent extends AppBaseComponent implements OnInit {
  title = 'blog';

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              protected app: AppComponent,
              protected dbService: NgxIndexedDBService) {
    super(router, activatedRoute, http, app, dbService);
  }
}
