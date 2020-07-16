import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppBaseComponent} from '../../app.base.component';
import {AppComponent} from '../../app.component';
import {NgxIndexedDBService} from 'ngx-indexed-db';
import {SwUpdate} from '@angular/service-worker';
import Swal from 'sweetalert2';

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
              private updates: SwUpdate,
              protected dbService: NgxIndexedDBService) {
    super(router, activatedRoute, http, app, dbService);
  }

  ngOnInit(): void {
    super.ngOnInit();

    if (this.updates.isEnabled) {

      this.updates.available.subscribe(() => {

        Swal.fire({
          title: '<strong>New version available!</strong>',
          icon: null,
          html: `
            <div class="row center-align">
              <div class="col s12">
                Load New Version?
              </div>
            </div>`,
          showCloseButton: true,
          showCancelButton: true,
          showConfirmButton: true
        }).then((result) => {
          if (result.value) {
            window.location.reload();
          }
        });
      });
    }
  }
}
