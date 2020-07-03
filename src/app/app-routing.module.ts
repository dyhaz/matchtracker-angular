import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './ui/index/index.component';
import {BlogComponent} from './ui/blog/blog.component';
import {BlogSingleComponent} from './ui/blog/blog-single.component';
import {AreaComponent} from './ui/area/area.component';
import {TeamComponent} from './ui/team/team.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'blog-single', component: BlogSingleComponent},
  { path: 'area', component: AreaComponent},
  { path: 'team', component: TeamComponent},
  { path: 'team/:team', component: TeamComponent},
  { path: 'team/byLeague/:league', component: TeamComponent},
  { path: '', redirectTo: 'index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
