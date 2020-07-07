import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppBaseComponent} from '../../app.base.component';
import {TeamsService} from '../../services/teams.service';
import {AppComponent} from '../../app.component';
import {CompetitionsService} from '../../services/competitions.service';
import {NoMatchMessageComponent} from '../../shared/components/no-match-message/no-match-message.component';

@Component({
  selector: 'app-competition-single',
  templateUrl: './competition-single.component.html'
})
export class CompetitionSingleComponent extends AppBaseComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('message', {static: true}) protected message: NoMatchMessageComponent;

  title = 'competition-single';
  isFav = false;
  competition: any;
  competitionDescription = '';
  compDetail: any;
  compMatches: any = [];
  compColors = {2021: 'purple', 2001: 'blue2', 2002: 'red', 2003: 'blue', 2014: 'rainbow', 2015: 'sky'};

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              protected competitionSvc: CompetitionsService,
              protected teamService: TeamsService,
              protected app: AppComponent) {
    super(router, activatedRoute, http, app);
  }

  processRequest(result: Promise<any>): void {
    this.app.showLoading(result);

    result.then(value => {
      this.competition = value;

      /**
       * Get competition description from Wikipedia
       */
      this.competitionSvc.getCompetitionDescription(value.name).subscribe(res => {
        res.then(val => {
          this.competitionDescription = val.lead.sections[0].text.split('<table')[0]
            .replace(/href=\"/g, 'href=\"https://en.wikipedia.org');
        });
      });

      this.competitionSvc.getStandings(value.id).subscribe(res => {
        res.then( val => {
          this.compDetail = val;
        });
      });

      this.competitionSvc.getMatches(value.id).subscribe(res => {
        res.then( val => {
          this.compMatches = [];
          val.matches.forEach(match => {
            /**
             * Get only today matches
             */
            const d = new Date();
            if (d.toDateString() === (new Date(match.utcDate)).toDateString()) {

              setInterval(() => {
                this.fetchTeamLogo(match);
                }, 2000);

              this.compMatches.push(match);
            }
          });

          if (this.compMatches.length === 0) {
            this.message.toggle();
          }
        });
      }, () => {
        this.app.toggleError();
      });
    });
  }

  fetchTeamLogo(match: any): void {
    /**
     * Fetch team logo
     */
    if (!match.awayTeam.crestUrl) {
      this.teamService.getTeam(match.awayTeam.id).subscribe(res2 => {
        res2.then(team => {
          match.awayTeam.crestUrl = team.crestUrl;
          match.awayTeam.shortName = team.shortName;
        });
      });
    }

    if (!match.homeTeam.crestUrl) {
      this.teamService.getTeam(match.homeTeam.id).subscribe(res2 => {
        res2.then(team => {
          match.homeTeam.crestUrl = team.crestUrl;
          match.homeTeam.shortName = team.shortName;
        });
      });
    }
  }

  favorite(): void {
    this.isFav = true;
    this.app.favorite();
  }

  share(): void {
    this.app.showShareButtons();
  }

  ngAfterViewInit(): void {
    this.app.showLoading();

    if (this.activatedRoute.snapshot.paramMap.get('competition')) {
      const competition = parseInt(this.activatedRoute.snapshot.paramMap.get('competition'), 10);

      this.competitionSvc.getCompetition(competition).subscribe(res => {
        this.processRequest(res);
      }, () => {
        this.app.toggleError();
      });
    }
  }

  ngOnDestroy(): void {
    this.competition = null;
    this.competitionDescription = '';
    this.compDetail = null;
    this.compMatches = [];
  }

}
