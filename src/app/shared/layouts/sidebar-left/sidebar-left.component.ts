import {AfterViewInit, Component} from '@angular/core';
import {AppBaseComponent} from '../../../app.base.component';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../../../app.component';
declare var $: any;

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html'
})
export class SidebarLeftComponent extends AppBaseComponent implements AfterViewInit {
  country = '';
  city = '';

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              protected app: AppComponent) {
    super(router, activatedRoute, http, app);
  }

  ngAfterViewInit(): void {
    if (this.city === '') {
      $.get('https://ipinfo.io', (response) => {
        this.city = response.city;
        this.country = response.country;
      }, 'jsonp');
    }
  }
}
