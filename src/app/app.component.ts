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
export class AppComponent implements OnInit{
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
      });
      return promise;
    }
  }

  public getCtryCode(countryName: string): string {

    switch (countryName) {
      case 'England': {
        return 'GB';
      }

      case 'Wales': {
        return 'WALES';
      }
    }

    return i18nIsoCountries.getAlpha3Code(countryName, 'en');
  }
}
