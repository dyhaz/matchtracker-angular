import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppBaseComponent} from '../../app.base.component';
import {AppComponent} from '../../app.component';
import {NgxIndexedDBService} from 'ngx-indexed-db';
import {MessagingService} from '../../services/messaging.service';


@Component({
  selector: 'app-notification-test',
  templateUrl: './notification-test.component.html'
})
export class NotificationTestComponent extends AppBaseComponent implements OnInit {
  title = 'index';
  subscription: any;

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              protected app: AppComponent,
              public messagingService: MessagingService,
              protected dbService: NgxIndexedDBService) {
    super(router, activatedRoute, http, app, dbService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.subscription = {
      endpoint: localStorage.getItem('pushEndpoint'),
      p256dh: localStorage.getItem('p256dh'),
      auth: localStorage.getItem('auth')
    };
  }

  allow() {
    this.messagingService.permitToNotify();
  }

  push() {
    this.messagingService.pushMsg().subscribe(val => {
      console.log(val);
    });
  }
}
