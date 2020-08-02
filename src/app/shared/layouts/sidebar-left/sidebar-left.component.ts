import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AppBaseComponent} from '../../../app.base.component';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../../../app.component';
import {NgxIndexedDBService} from 'ngx-indexed-db';
import {AuthService} from '../../../services/auth.service';
declare var $: any;

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html'
})
export class SidebarLeftComponent extends AppBaseComponent implements AfterViewInit {
  @ViewChild('FileSelectInputDialog', {static: true}) FileSelectInputDialog: ElementRef;

  name = 'Guest';
  country = '';
  city = '';

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              protected app: AppComponent,
              protected dbService: NgxIndexedDBService,
              public authService: AuthService) {
    super(router, activatedRoute, http, app, dbService);
  }

  ngAfterViewInit(): void {
    if (localStorage.getItem('profileImage')) {
      this.setProfileImage(localStorage.getItem('profileImage'));
    }

    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      this.name = user.displayName;
      this.setProfileImage(user.photoURL);
    }

    if (this.city === '') {
      $.get('https://ipinfo.io', (response) => {
        this.city = response.city;
        this.country = response.country;
      }, 'jsonp');
    }
  }

  setProfileImage(url): void {
    const image = document.getElementsByClassName('responsive-img')[0] as HTMLImageElement;
    image.src = url;
    $(image).css('width', image.width + 'px');
    $(image).css('height', image.width + 'px');
  }

  navigate(target) {
    $('.sidebar').sideNav('hide');
    super.navigate(target);
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
        localStorage.setItem('profileImage', image.src);
      };

      const files = elem.target.files;
      reader.readAsDataURL(files[0]);
    });
    e.click();
  }
}
