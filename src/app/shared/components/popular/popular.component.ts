import {AfterViewInit, Component} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AppBaseComponent} from '../../../app.base.component';
import {ActivatedRoute, Router} from '@angular/router';
import {AppComponent} from '../../../app.component';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html'
})
export class PopularComponent extends AppBaseComponent implements AfterViewInit {
  env = environment;

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              protected app: AppComponent) {
    super(router, activatedRoute, http, app);
  }

  ngAfterViewInit() {
  }
}
