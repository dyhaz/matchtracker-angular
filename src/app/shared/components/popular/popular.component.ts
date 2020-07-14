import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppBaseComponent} from '../../../app.base.component';
import {ActivatedRoute, Router} from '@angular/router';
import {AppComponent} from '../../../app.component';
import {CompetitionsService} from '../../../services/competitions.service';
import {NgxIndexedDBService} from 'ngx-indexed-db';

declare var $: any;

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html'
})
export class PopularComponent extends AppBaseComponent implements AfterViewInit, OnDestroy {
  leagues = [2001, 2002, 2003, 2021, 2014, 2015]; // Default competition IDs
  listComps = [];
  compDetail: any = [];

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              protected competitionSvc: CompetitionsService,
              protected app: AppComponent,
              protected dbService: NgxIndexedDBService) {
    super(router, activatedRoute, http, app, dbService);
  }

  processRequest(result: Promise<any>): void {

    result.then(value => {
      this.listComps = [];
      value.competitions.forEach(val => {
        if (val.emblemUrl || this.leagues.includes(val.id)) {
          this.listComps.push(val);
          /**
           * Get standings
           */
          this.getStandings(val.id);
          setInterval(() => {
            this.getStandings(val.id);
          }, 60000 + Math.floor(Math.random() * 1000));
        }
      });

      setTimeout(() => {
        const carousel = $('.popular-slide');

        carousel.trigger('destroy.owl.carousel');
        carousel.find('.owl-stage-outer').children().unwrap();
        carousel.removeClass('owl-center owl-loaded owl-text-select-on');

        carousel.owlCarousel({
          items: 1,
          slideSpeed: 1000,
          dots: true,
          paginationSpeed: 400,
          singleItem: true,
          loop: true,
          margin: 10
        });
      }, 100);
    });

    result.catch(() => {
      this.app.toggleError();
    });
  }

  getStandings(id: number) {
    this.competitionSvc.getStandings(id).subscribe(res => {
      res.then( standing => {
        this.compDetail[id] = standing;
      });
    }, () => {
      this.getStandings(id);
    });
  }

  ngAfterViewInit() {
    /**
     * List all competitions
     */
    this.competitionSvc.getCompetitions().subscribe(res => {
      this.processRequest(res);
    }, () => {
      this.app.toggleError();
    });
  }

  ngOnDestroy() {
    this.compDetail = [];
    this.listComps = [];
  }
}
