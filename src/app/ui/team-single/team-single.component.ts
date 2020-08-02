import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppBaseComponent} from '../../app.base.component';
import {TeamsService} from '../../services/teams.service';
import {AppComponent} from '../../app.component';
import {NgxIndexedDBService} from 'ngx-indexed-db';
import {PlayersService} from '../../services/players.service';

@Component({
  selector: 'app-team-single',
  templateUrl: './team-single.component.html'
})
export class TeamSingleComponent extends AppBaseComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'team-single';
  team: any;
  teamDescription = '';
  alternateImage = '';

  scheduled: any;
  finished: any;
  wins: number;
  draws: number;
  loses: number;
  isLiked = false;

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              protected teamService: TeamsService,
              protected playersService: PlayersService,
              protected app: AppComponent,
              protected dbService: NgxIndexedDBService) {
    super(router, activatedRoute, http, app, dbService);
  }

  processRequest(result: Promise<any>): void {
    this.app.showLoading(result);

    result.then(value => {
      this.team = value;

      this.teamService.getTeamDescription(this.team.name).subscribe(res => {
        res.then(val => {
          this.teamDescription = val.lead.sections[0].text.split('<table')[0]
            .replace(/href=\"/g, 'href=\"https://en.wikipedia.org');
          this.alternateImage = val.lead.image ? val.lead.image.urls['800'] : 'assets/images/blog1.jpg';
          this.getMatches(this.team.id);
        });
      });

      this.team.squad.forEach((squad, key) => {
        const squadName = squad.name.split(' ');
        if (squadName.length > 1) {
          this.playersService.getPlayerByName(squad.name.split(' ')[0].toLowerCase(),
            squad.name.split(' ')[1].toLowerCase()).subscribe(val => {
            val.then(squadData => {
              console.log(squadData);
              this.team.squad[key].image = squadData[0] && squadData[0]._image ? squadData[0]._image :
                'https://dummyimage.com/600x400/ffffff/000.png&text=' + (squad.shirtNumber ? squad.shirtNumber : '%20');
            });
          });
        } else {
          this.team.squad[key].image = 'https://dummyimage.com/600x400/ffffff/000.png&text=' +
            (squad.shirtNumber ? squad.shirtNumber : '%20');
        }
      });
    });

    result.catch(() => {
      this.app.toggleError();
    });
  }

  getMatches(team: number) {
    this.teamService.getTeamPerformances(team).subscribe(res => {
      res.then(value => {
        this.scheduled = value;
      });
    });

    this.teamService.getTeamPerformances(team, 'FINISHED').subscribe(res => {
      res.then(value => {
        this.finished = value;
        this.getLoses(); this.getWins(); this.getDraws();
      });
    });
  }

  getWins(): void {
    if (this.finished) {
      this.wins = 0;

      this.finished.matches.forEach(match => {
        if ((match.score.winner === 'HOME_TEAM' && match.homeTeam.id === this.team.id) ||
          (match.score.winner === 'AWAY_TEAM' && match.awayTeam.id === this.team.id)) {
          this.wins++;
        }
      });
    }
  }

  getDraws(): void {
    if (this.finished) {
      this.draws = 0;

      this.finished.matches.forEach(match => {
        if (match.score.winner === 'DRAW') {
          this.draws++;
        }
      });
    }
  }

  getLoses(): void {
    if (this.finished) {
      this.loses = 0;

      this.finished.matches.forEach(match => {
        if ((match.score.winner === 'HOME_TEAM' && match.homeTeam.id !== this.team.id) ||
          (match.score.winner === 'AWAY_TEAM' && match.awayTeam.id !== this.team.id)) {
          this.loses++;
        }
      });
    }
  }

  share(): void {
    this.app.showShareButtons('Check out this cool app! It’s called MatchTracker');
  }

  ngAfterViewInit(): void {
    this.app.showLoading();

    if (this.activatedRoute.snapshot.paramMap.get('team')) {
      /**
       * Get team
       */
      const team = parseInt(this.activatedRoute.snapshot.paramMap.get('team'), 10);
      this.teamService.getTeam(team).subscribe(res => {
        this.processRequest(res);
      }, () => {
        this.app.toggleError();
      });

      /**
       * Get favorite
       */
      this.dbService.getByIndex('team', 'id', team).then(
        t => {
          if (t) {
            this.isLiked = true;
          }
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.teamDescription = '';
    this.team = null;
    this.scheduled = null;
    this.finished = null;
  }

  favorite(): void {
    if (this.isLiked) {
      this.dbService.delete('team', this.team.id).then(
        () => {
        });
    } else {
      this.dbService.add('team', { ...this.team, description: this.teamDescription}).then(() => {
      });
    }
  }
}
