import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppBaseComponent} from '../../../app.base.component';
import {AppComponent} from '../../../app.component';
import StringUtils from '../../../shared/helpers/string-utils';
import {NgxIndexedDBService} from 'ngx-indexed-db';
import {EmployeeService} from '../../../services/employee.service';

@Component({
  selector: 'app-emp',
  styleUrls: ['employee.component.css'],
  templateUrl: './employee.component.html'
})
export class EmployeeComponent extends AppBaseComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'employee';
  listUsers: any = [];
  searchText = '';

  itemsPerPage = 6;
  descs: any = new Array(this.itemsPerPage).fill('');
  currentPage = 0;
  pages = [];
  begin = 0;
  end = 0;

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              protected employeeService: EmployeeService,
              protected app: AppComponent,
              protected dbService: NgxIndexedDBService) {
    super(router, activatedRoute, http, app, dbService);
  }

  truncate(val: string) {
    return StringUtils.truncate(val, 200);
  }

  filter() {
    this.employeeService.getUsers(this.currentPage - 1).subscribe(res => {
      this.app.showLoading(res);

      res.then(value => {
        this.listUsers = value;
        this.app.showLoading();
        let newUsers = [];
        const txt = this.searchText.toLowerCase().trim();

        if (txt !== '') {
          this.listUsers.data.forEach((user, key) => {
            if (user.email.toLowerCase().trim().includes(txt) || user.last_name.toLowerCase().trim().includes(txt) ||
              user.first_name.toLowerCase().trim().includes(txt) || this.descs[key].toLowerCase().trim().includes(txt)) {
              newUsers.push(user);
            }
          });

          console.log(newUsers);
          this.listUsers.data.splice(0, this.listUsers.data.length, ...newUsers); // Append new contents
        }

        this.app.hideLoading();
      });
    });
  }

  getNumOfPages() {
    if (typeof this.listUsers.data === 'undefined') {
      return 0;
    }
    return Math.ceil(this.listUsers.total_pages);
  }

  createPagination() {
    const res = [];
    for (let i = 0; i < this.getNumOfPages(); i++) {
      res.push(i + 1);
    }
    this.pages = res;
    this.goToPage(1);
  }

  goToPage(page: number) {
    this.currentPage = page - 1;
    // this.begin = ((this.currentPage) * this.itemsPerPage);
    // this.end = this.begin + this.itemsPerPage;
    this.employeeService.getUsers(page).subscribe(res => {
      this.processRequest(res);
    });
  }

  showDescriptions() {
    this.descs = new Array(this.itemsPerPage).fill('');

    if (this.listUsers.data) {
      this.listUsers.data.forEach((user, key) => {
        this.descs[key] = this.getEmpPosition(user.id);
      });
    }
  }

  getEmpPosition(id: number) {
    if (id === 1) {
      return 'Director';
    } else if (id >= 2 && id < 4) {
      return 'Manager';
    } else if (id >= 4 && id < 6) {
      return 'Supervisor';
    } else if (id >= 6) {
      return 'Staff';
    }
  }

  processRequest(result: Promise<any>): void {
    this.app.showLoading(result);

    result.then(value => {
      this.listUsers = value;
      if (this.pages.length === 0) {
        this.createPagination();
      }
    });

    result.catch(() => {
      this.app.toggleError();
    });

    this.showDescriptions();
  }

  ngAfterViewInit(): void {
    this.app.showLoading();
    /**
     * List all users
     */
    this.employeeService.getUsers().subscribe(res => {
      this.processRequest(res);
    });
  }

  ngOnDestroy(): void {
    this.descs = [];
    this.listUsers = [];
  }

}
