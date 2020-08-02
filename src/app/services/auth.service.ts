import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    protected router: Router,
    private toastr: ToastrService,
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) { }

  // Sign in with Twitter
  TwitterAuth() {
    return this.AuthLogin(new auth.TwitterAuthProvider());
  }

  // Sign in with IG
  FacebookAuth() {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        this.toastr.success('Welcome!', 'Success');
        setTimeout(() => {
          localStorage.setItem('user', JSON.stringify(result.user));
          window.location.href = '/';
        }, 1000);
      }).catch((error) => {
        this.toastr.error('Failed: ' + error.message, 'Error!');
      });
  }

  Logout() {
    return this.afAuth.signOut().then((result) => {
      this.toastr.success('Bye', 'Success');
      setTimeout(() => {
        localStorage.removeItem('user');
        window.location.href = '/';
      }, 1000);
    }).catch((error) => {
      this.toastr.error('Failed: ' + error.message, 'Error!');
    });
  }

}
