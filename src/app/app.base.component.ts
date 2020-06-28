import {OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';

export class AppBaseComponent implements OnInit {
  env = environment;

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient) {
  }

  ngOnInit(): void {
  }
}
