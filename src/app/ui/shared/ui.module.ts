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
import {AppModule} from '../../app.module';
import {ErrorMessageComponent} from '../../shared/components/error-message/error-message.component';
import {CircularSpinnerComponent} from '../../shared/components/spinner/circular-spinner.component';
import {IsEmptyPipe} from '../../shared/pipes/is-empty.pipe';
import {TeamSingleComponent} from '../team-single/team-single.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    SweetAlert2Module,
  ],
  declarations: [
    IndexComponent,
    BlogComponent,
    BlogSingleComponent,
    AreaComponent,
    TeamComponent,
    TeamSingleComponent,
    SliderComponent,
    PopularComponent,
    TestimonialComponent,
    FeaturesComponent,
    LatestNewsComponent,
    CircularSpinnerComponent,
    /**
     * Pipes
     */
    IsEmptyPipe,
  ],
  exports: [
  ],
  providers: [
    AreasService, TeamsService, PlayersService
  ]
})
export class UiModule { }
