import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppBaseComponent} from '../../app.base.component';
import {AppComponent} from '../../app.component';
import {CompetitionsService} from '../../services/competitions.service';
import {TeamsService} from '../../services/teams.service';
import StringUtils from '../../shared/helpers/string-utils';
import {HourFormatPipe} from '../../shared/pipes/hour-format.pipe';
declare var moment: any;

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html'
})
export class MatchComponent extends AppBaseComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'matches';
  listComps: any = [];
  listCompDetails: any = [];
  listMatches: any = [];
  leagues = [2001, 2002, 2003, 2021, 2014, 2015]; // Default competition IDs

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
      this.listComps = [];
      this.listCompDetails = [];
      this.listMatches = [];

      value.competitions.forEach(val => {
        if (val.emblemUrl || this.leagues.includes(val.id)) {
          this.listComps.push(val);
        }
      });

      /**
       * Get standings
       */
      // this.listComps.forEach(comp => {
      //   this.competitionSvc.getStandings(comp.id, 'FINISHED').subscribe(res => {
      //     res.then( val => {
      //       this.listCompDetails.push(val);
      //     });
      //   }, () => {
      //     this.app.toggleError();
      //   });
      // });

      /**
       * Get today's matches
       */
      this.listComps.forEach(comp => {
        this.getMatches(comp.id);
      });
    });

    result.catch(() => {
      this.app.toggleError();
    });
  }

  getMatches(idCompetition): void {
      this.competitionSvc.getMatches(idCompetition).subscribe(res => {
        res.then(val => {
          const listMatchesTmp = [];

          val.matches.forEach(match => {
            /**
             * Get only today matches
             */
            const d = new Date();
            if (d.toDateString() === (new Date(match.utcDate)).toDateString()) {

              setInterval(() => {
                this.fetchTeamLogo(match);
              }, 2000);

              listMatchesTmp.push(match);
            }
          });
          this.listMatches[idCompetition] = listMatchesTmp;
        });
      }, () => {
        this.getMatches(idCompetition);
        this.app.toggleError();
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

  getColor(match): string {
    switch (match.status) {
      case 'FINISHED':
        return 'bg-green';
      case 'LIVE':
        return 'bg-rainbow';
      case 'IN_PLAY':
        return 'bg-orange';
      case 'SCHEDULED':
        return 'bg-sky';
      default:
        return 'bg-red';
    }
  }

  getGoals(match): any {
    switch (match.status) {
      case 'IN_PLAY':
        return {homeTeam: match.score.fullTime.homeTeam, awayTeam: match.score.fullTime.awayTeam};
      case 'FINISHED':
        return {homeTeam: match.score.fullTime.homeTeam, awayTeam: match.score.fullTime.awayTeam};
      default:
        return {homeTeam: '<img width="20px" height="20px" alt="emblem" src="' + match.homeTeam.crestUrl + '"/>',
          awayTeam: '<img width="20px" height="20px" alt="emblem" src="' + match.awayTeam.crestUrl + '"/>'};
    }
  }

  getTime(match): any {
    switch (match.status) {
      case 'FINISHED':
        return 'FT';
      case 'LIVE':
        return moment(new Date()).diff(new Date(match.utcDate), 'minutes') + '\'';
      case 'IN_PLAY':
        return moment(new Date()).diff(new Date(match.utcDate), 'minutes') + '\'';
      case 'SCHEDULED':
        const hourFormat = new HourFormatPipe();
        return hourFormat.transform(match.utcDate, false);
      default:
        return '~';
    }
  }

  truncate(str, max): string {
    return StringUtils.truncate(str, max);
  }

  ngAfterViewInit(): void {
    this.app.showLoading();

    /**
     * List all competitions
     */
    this.competitionSvc.getCompetitions().subscribe(res => {
      this.processRequest(res);
    }, () => {
      this.app.toggleError();
    });
  }

  ngOnDestroy(): void {
    this.listComps = [];
  }

}
