import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UiModule } from './ui/shared/ui.module';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {LayoutsModule} from './shared/layouts/layouts.module';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {ErrorMessageComponent} from './shared/components/error-message/error-message.component';
import {SuccessMessageComponent} from './shared/components/success-message/success-message.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ErrorMessageComponent,
    SuccessMessageComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutsModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot(), // ToastrModule added
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
