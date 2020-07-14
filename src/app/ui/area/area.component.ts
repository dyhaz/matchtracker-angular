import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppBaseComponent} from '../../app.base.component';
import {AreasService} from '../../services/areas.service';
import {AppComponent} from '../../app.component';
import {NgxIndexedDBService} from 'ngx-indexed-db';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html'
})
export class AreaComponent extends AppBaseComponent implements OnInit, AfterViewInit {
  title = 'area';

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              protected areaService: AreasService,
              protected app: AppComponent,
              protected dbService: NgxIndexedDBService) {
    super(router, activatedRoute, http, app, dbService);
  }

  ngAfterViewInit(): void {
    this.app.showLoading();
    this.areaService.getAreas().subscribe(res => {
      res.then(value => {
        console.log(value);
      });
      res.catch(() => {
        this.app.toggleError();
      });
    });
  }
}
