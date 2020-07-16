import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UiModule } from './ui/shared/ui.module';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {LayoutsModule} from './shared/layouts/layouts.module';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {ErrorMessageComponent} from './shared/components/error-message/error-message.component';
import {SuccessMessageComponent} from './shared/components/success-message/success-message.component';
import { ToastrModule } from 'ngx-toastr';
import {NgxIndexedDBModule} from 'ngx-indexed-db';
import {defaultEnv} from '../environments/default';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import * as firebase from 'firebase';
import {AngularFireMessagingModule} from '@angular/fire/messaging';

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
    NgxIndexedDBModule.forRoot(defaultEnv.dbConfig),
    AngularFireModule.initializeApp(defaultEnv.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AngularFireMessagingModule, // messaging
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('../firebase-messaging-sw.js')
        .then((registration) => {
          firebase.messaging().useServiceWorker(registration);
        });
    }
  }
}
