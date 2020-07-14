import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import * as firebase from 'firebase';
import {SwPush, SwUpdate} from '@angular/service-worker';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  env = environment;

  constructor(
    private toastr: ToastrService,
    private updates: SwUpdate,
    private push: SwPush) {
    this.subscribeToNotifications();
  }

  subscribeToNotifications() {
    this.updates.available.subscribe(() => this.updates.activateUpdate().then(() => {
      console.log('reload for update');
      document.location.reload();
    }));

    this.push.messages.subscribe(msg => console.log('push message', msg));
    this.push.notificationClicks.subscribe(click => console.log('notification click', click));
    if (!firebase.apps.length) {
      firebase.initializeApp(this.env.firebaseConfig);
      navigator.serviceWorker.getRegistration().then(swr => firebase.messaging().useServiceWorker(swr));
    }
  }

  unsubscribe() {
    return this.push.unsubscribe().then((msg) => {
      console.log('Unsubscribe from push ' + msg);
    });
  }
  permitToNotify() {
    const messaging = firebase.messaging();

    // Periksa fitur Notification API
    if ('Notification' in window) {
      messaging.requestPermission()
        .then(() => messaging.getToken().then(token => {
          localStorage.setItem('deviceToken', token);
          this.toastr.success('Thank you! You will be notified immediately of any updates', 'Success!');

          /**
           * Enable service worker notification
           */
          this.unsubscribe().then(() => {
            const req = this.push.requestSubscription({
              serverPublicKey: this.env.vapidPublicKey
            });
            req.then(sub => console.log(sub));
            req.catch(e => this.toastr.error('Could not subscribe to notifications! ' + e.toString(), 'Error!'));
          });
        }))
        .catch(err => {
          this.toastr.error('Unable to get permission to notify. ' + err.toString(), 'Error!');
        });
    } else {
      this.toastr.error('Your browser doesn’t support notification', 'Error!');
    }
  }

  notifySimple() {
    const title = 'Notifikasi Sederhana';
    const options = {
      body: 'Ini adalah konten notifikasi. \nBisa menggunakan baris baru.',
    };

    if (Notification.permission === 'granted') {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification(title, options);
      });
    } else {
      this.toastr.error('Notifications not allowed!', 'Error!');
    }
  }

  notifyInteract() {
    const title = 'Notifikasi yang meminta interaksi pengguna';
    const options = {
      requireInteraction: true,
    };
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification(title, options);
      });
    } else {
      this.toastr.error('Notifications not allowed!', 'Error!');
    }
  }

  notifyIcon() {
    const title = 'Notifikasi Sederhana';
    const options = {
      body: 'Ini adalah konten notifikasi dengan gambar ikon.',
      icon: '/assets/images/favicon.png'
    };

    if (Notification.permission === 'granted') {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification(title, options);
      });
    } else {
      this.toastr.error('Notifications not allowed!', 'Error!');
    }
  }

  notifyBadge() {
    const title = 'Notifikasi dengan Badge';
    const options = {
      body: 'Ini adalah konten notifikasi dengan gambar badge.',
      badge: '/assets/images/favicon.png'
    };
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification(title, options);
      });
    } else {
      this.toastr.error('Notifications not allowed!', 'Error!');
    }
  }
}
