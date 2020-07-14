import {Component, Input} from '@angular/core';
import {AppBaseComponent} from '../../../app.base.component';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../../../app.component';
import StringUtils from '../../helpers/string-utils';
import {NgxIndexedDBService} from 'ngx-indexed-db';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html'
})
export class StandingsComponent extends AppBaseComponent {
  @Input() public compDetail: any;
  @Input() public maxTeams = 10000;

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              protected app: AppComponent,
              protected dbService: NgxIndexedDBService) {
    super(router, activatedRoute, http, app, dbService);
  }

  truncate(str, max): string {
    return StringUtils.truncate(str, max);
  }
}
