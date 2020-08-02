import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppBaseComponent} from '../../app.base.component';
import { ToastrService } from 'ngx-toastr';
import {AppComponent} from '../../app.component';
import {NgxIndexedDBService} from 'ngx-indexed-db';
import {AuthService} from '../../services/auth.service';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent extends AppBaseComponent implements OnInit, AfterViewInit {
  title = 'log-in';

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              private toastr: ToastrService,
              protected app: AppComponent,
              protected dbService: NgxIndexedDBService,
              public authService: AuthService) {
    super(router, activatedRoute, http, app, dbService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {

  }

  loginTwitter(): void {

  }
}
