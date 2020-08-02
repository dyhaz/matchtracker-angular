import {Component, ViewChild} from '@angular/core';
import {AppBaseComponent} from '../../../app.base.component';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../../../app.component';
import {AboutComponent} from '../about/about.component';
import {NgxIndexedDBService} from 'ngx-indexed-db';

@Component({
  selector: 'app-flappy',
  templateUrl: './flappy.component.html'
})
export class FlappyComponent extends AppBaseComponent {
  @ViewChild('about', {static: true}) protected about: AboutComponent;

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              protected app: AppComponent,
              protected dbService: NgxIndexedDBService) {
    super(router, activatedRoute, http, app, dbService);
  }

}
