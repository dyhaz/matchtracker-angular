import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './ui/index/index.component';
import {BlogComponent} from './ui/blog/blog.component';
import {BlogSingleComponent} from './ui/blog/blog-single.component';
import {AreaComponent} from './ui/area/area.component';
import {TeamComponent} from './ui/team/team.component';
import {TeamSingleComponent} from './ui/team-single/team-single.component';
import {CompetitionComponent} from './ui/competition/competition.component';
import {CompetitionSingleComponent} from './ui/competition-single/competition-single.component';
import {MatchComponent} from './ui/match/match.component';
import {FavoriteComponent} from './ui/favorite/favorite.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'blog-single', component: BlogSingleComponent},
  { path: 'area', component: AreaComponent},
  { path: 'team', component: TeamComponent},
  { path: 'team/:team', component: TeamSingleComponent},
  { path: 'competition', component: CompetitionComponent},
  { path: 'competition/:competition', component: CompetitionSingleComponent},
  { path: 'team/byLeague/:league', component: TeamComponent},
  { path: 'match', component: MatchComponent},
  { path: 'favorite', component: FavoriteComponent},
  { path: '', redirectTo: 'index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
