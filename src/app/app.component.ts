import {Component, OnInit, ViewChild} from '@angular/core';
import {ErrorMessageComponent} from './shared/components/error-message/error-message.component';
import * as i18nIsoCountries from 'i18n-iso-countries';
import Swal from 'sweetalert2';

declare var System: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('error', {static: true}) protected error: ErrorMessageComponent;
  @ViewChild('success', {static: true}) protected success: ErrorMessageComponent;
  title = 'footballgo-pwa';

  ngOnInit(): void {
    System.import('../assets/json/en.json').then(file => {
      i18nIsoCountries.registerLocale(file);
    });
  }

  public toggleError(): void {
    this.error.toggle();
  }

  public toggleSuccess(): void {
    this.success.toggle();
  }

  public showLoading(promise?: Promise<any>): any {
    Swal.showLoading();
    if (promise) {
      promise.finally(() => {
        Swal.close();
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      });
      return promise;
    }
  }

  public hideLoading() {
    Swal.close();
  }

  public showShareButtons(content?: string) {
    content = content.replace(/'/g, '’');
    Swal.fire({
      title: '<strong>Share</strong>',
      icon: null,
      html: `<button type="button" class="swal2-confirm swal2-styled" aria-label="Copy URL"
              style="display: inline-block;
              width: 100%; margin-left: 0;
              border-left-color: rgb(48, 133, 214);
              border-right-color: rgb(48, 133, 214);" onClick="console.log('URL copied...'); copyLink();
              this.disabled = true; this.className = 'swal2-cancel swal2-styled'">
              <i class="fa fa-link"></i> Copy URL</button>
            <button type="button" class="swal2-confirm swal2-styled" aria-label="Twitter"
              style="display: inline-block; width: 100%; margin-left: 0;"
              onClick="twitterShare('${content}')">
              <i class="fab fa-twitter"></i> Twitter</button>
            <button type="button" class="swal2-confirm swal2-styled" aria-label="Facebook"
              style="display: inline-block; width: 100%; margin-left: 0;"
              onClick="fbShare('${content}')">
              <i class="fab fa-facebook"></i> Facebook</button>`,
      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton: false
    });
  }

  public getCtryCode(countryName: string): string {

    switch (countryName.trim()) {
      case 'England': {
        return 'GB';
      }

      case 'Wales': {
        return 'WALES';
      }

      case 'Europe': {
        return 'EUR';
      }

      case 'Africa': {
        return 'AFR';
      }

      case 'Asia': {
        return 'AFC';
      }
    }

    return i18nIsoCountries.getAlpha3Code(countryName.trim(), 'en');
  }
}
