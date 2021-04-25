import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppBaseComponent} from '../../../app.base.component';
import {AppComponent} from '../../../app.component';
import StringUtils from '../../../shared/helpers/string-utils';
import {NgxIndexedDBService} from 'ngx-indexed-db';
import {EmployeeService} from '../../../services/employee.service';
import {UserDto} from '../../../shared/dto/UserDto';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-emp-single',
  templateUrl: './employee-single.component.html'
})
export class EmployeeSingleComponent extends AppBaseComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('FileSelectInputDialog', {static: true}) FileSelectInputDialog: ElementRef;

  title = 'employee';
  firstName = '';
  lastName = '';
  user = {
    id: 0,
    first_name: '',
    last_name: '',
    avatar: 'assets/images/blog1.jpg'
  };
  position = '';
  cmbPosition = [
    {id: 1, label: 'Director'},
    {id: 2, label: 'Manager'},
    {id: 3, label: 'Supervisor'},
    {id: 4, label: 'Staff'},
  ];
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

  processRequest(result: Promise<any>): void {
    this.app.showLoading(result);

    result.then(value => {
      this.user = value.data;
      this.firstName = this.user.first_name;
      this.lastName = this.user.last_name;
      this.position = this.getEmpPosition(this.user.id);
      console.log(this.user);
    });

    result.catch(() => {
      this.app.toggleError();
    });
  }

  ngAfterViewInit(): void {
    this.app.showLoading();

    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);

      if (id > 0 && !Number.isNaN(id)) {
        this.employeeService.getUser(id).subscribe(res => {
          this.processRequest(res);
        });
      } else {
        this.app.hideLoading();
      }
    }
  }

  save() {
    let newUser = new UserDto();
    newUser.name = this.user.first_name + ' ' + this.user.last_name;

    if (this.user.id) {
      this.employeeService.changeUser(newUser).subscribe(res => {
        this.app.showLoading(res);

        res.then(value => {
          this.user = value.data;

          Swal.fire({
            icon: 'success',
            title: 'Data has been saved',
            showConfirmButton: false,
            timer: 1500
          });
        });

        res.catch(() => {
          this.app.toggleError();
        });
      });
    } else {
      this.employeeService.addUser(newUser).subscribe(res => {
        this.app.showLoading(res);

        res.then(value => {
          this.user = value.data;

          Swal.fire({
            icon: 'success',
            title: 'Data has been saved',
            showConfirmButton: false,
            timer: 1500
          });
        });

        res.catch(() => {
          this.app.toggleError();
        });
      });
    }
  }

  delete() {
    if (this.user.id) {
      this.employeeService.removeUser(this.user.id).subscribe(res => {
        this.app.showLoading(res);

        res.finally(() => {

          Swal.fire({
            icon: 'success',
            title: 'Data has been deleted',
            showConfirmButton: false,
            timer: 1500
          });
        });
      });
    }
  }

  getEmpPosition(id: number) {
    if (id === 1) {
      return '1';
    } else if (id >= 2 && id < 4) {
      return '2';
    } else if (id >= 4 && id < 6) {
      return '3';
    } else if (id >= 6) {
      return '4';
    }
  }

  openFileDialog() {
    const e: HTMLElement = this.FileSelectInputDialog.nativeElement;
    $(e).on('change', (elem) => {
      const reader = new FileReader();
      reader.onload = () => {
        const image = document.getElementsByClassName('responsive-img')[0] as HTMLImageElement;
        image.src = reader.result.toString();

        $(image).css('width', image.width + 'px');
        $(image).css('height', image.width + 'px');

        this.user.avatar = image.src;
      };

      const files = elem.target.files;
      reader.readAsDataURL(files[0]);
    });
    e.click();
  }

  ngOnDestroy(): void {
    this.user = null;
  }

  ngOnInit(): void {
  }

}
