import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IndexComponent } from '../index/index.component';
import {SliderComponent} from '../../shared/components/slider/slider.component';
import {PopularComponent} from '../../shared/components/popular/popular.component';
import {TestimonialComponent} from '../../shared/components/testimonial/testimonial.component';
import {FeaturesComponent} from '../../shared/components/features/features.component';
import {LatestNewsComponent} from '../../shared/components/latest-news/latest-news.component';
import {BlogComponent} from '../blog/blog.component';
import {BlogSingleComponent} from '../blog/blog-single.component';
import {AreasService} from '../../services/areas.service';
import {AreaComponent} from '../area/area.component';
import {TeamsService} from '../../services/teams.service';
import {PlayersService} from '../../services/players.service';
import {TeamComponent} from '../team/team.component';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {CircularSpinnerComponent} from '../../shared/components/spinner/circular-spinner.component';
import {IsEmptyPipe} from '../../shared/pipes/is-empty.pipe';
import {TeamSingleComponent} from '../team-single/team-single.component';
import {CompetitionComponent} from '../competition/competition.component';
import {CompetitionSingleComponent} from '../competition-single/competition-single.component';
import {HourFormatPipe} from '../../shared/pipes/hour-format.pipe';
import {ShareButtonsComponent} from '../../shared/components/share-buttons/share-buttons.component';
import {NoMatchMessageComponent} from '../../shared/components/no-match-message/no-match-message.component';
import {BackgroundFadeInDirective} from '../../shared/directives/background-fade-in.directive';
import {HttpClientModule} from '@angular/common/http';
import {MatchComponent} from '../match/match.component';
import {FavoriteComponent} from '../favorite/favorite.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SweetAlert2Module
  ],
  declarations: [
    IndexComponent,
    BlogComponent,
    BlogSingleComponent,
    AreaComponent,
    TeamComponent,
    TeamSingleComponent,
    CompetitionComponent,
    CompetitionSingleComponent,
    MatchComponent,
    FavoriteComponent,
    NoMatchMessageComponent,
    SliderComponent,
    PopularComponent,
    TestimonialComponent,
    FeaturesComponent,
    LatestNewsComponent,
    CircularSpinnerComponent,
    ShareButtonsComponent,
    /**
     * Pipes
     */
    IsEmptyPipe,
    HourFormatPipe,
    /**
     * Directives
     */
    BackgroundFadeInDirective
  ],
  exports: [
    ShareButtonsComponent
  ],
  providers: [
    AreasService, TeamsService, PlayersService
  ]
})
export class UiModule { }
