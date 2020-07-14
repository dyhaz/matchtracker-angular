import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AppBaseComponent} from '../../../app.base.component';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../../../app.component';
import {NgxIndexedDBService} from 'ngx-indexed-db';
declare var $: any;

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html'
})
export class SidebarLeftComponent extends AppBaseComponent implements AfterViewInit {
  @ViewChild('FileSelectInputDialog', {static: true}) FileSelectInputDialog: ElementRef;

  country = '';
  city = '';

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected http: HttpClient,
              protected app: AppComponent,
              protected dbService: NgxIndexedDBService) {
    super(router, activatedRoute, http, app, dbService);
  }

  ngAfterViewInit(): void {
    if (localStorage.getItem('profileImage')) {
      const image = document.getElementsByClassName('responsive-img')[0] as HTMLImageElement;
      image.src = localStorage.getItem('profileImage');
      $(image).css('width', image.width + 'px');
      $(image).css('height', image.width + 'px');
    }

    if (this.city === '') {
      $.get('https://ipinfo.io', (response) => {
        this.city = response.city;
        this.country = response.country;
      }, 'jsonp');
    }
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
