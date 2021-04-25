import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './ui/index/index.component';
import {BlogComponent} from './ui/blog/blog.component';
import {BlogSingleComponent} from './ui/blog/blog-single.component';
import {AreaComponent} from './ui/area/area.component';
import {NotificationTestComponent} from './ui/notification-test/notification-test.component';
import {LoginComponent} from './ui/login/login.component';
import {EmployeeComponent} from './ui/ems/employee/employee.component';
import {EmployeeSingleComponent} from './ui/ems/employee-single/employee-single.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'blog-single', component: BlogSingleComponent},
  { path: 'area', component: AreaComponent},
  { path: 'notifications', component: NotificationTestComponent},
  { path: 'login', component: LoginComponent},
  { path: 'employee', component: EmployeeComponent},
  { path: 'employee/:id', component: EmployeeSingleComponent},
  { path: '', redirectTo: 'index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
