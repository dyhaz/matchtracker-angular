import { Injectable } from '@angular/core';
import {
    HttpClient,
} from '@angular/common/http';


import { AuthorizedRequestService } from './authorized-request.service';
import {
    OAuthService,
    OAuthKey,
    OAuthToken
} from './oauth.service';
import { Sha1Service } from './sha1.service';

/**
 * This service supposes to be used in Cordova, Electron, Chrome Extensions or web security disabled browser.
 */
@Injectable()
export class TwitterService {
    private authRequest: AuthorizedRequestService;

    constructor(
        private http: HttpClient
    ) {
        this.authRequest = new AuthorizedRequestService(
            new OAuthService(new Sha1Service()),
            this.http
        );
    }

    get(url: string, query: any, oauthKey: OAuthKey, oauthToken: OAuthToken) {
        return this.authRequest.get(url, query, oauthKey, oauthToken);
    }

    post(url: string, params: any, oauthKey: OAuthKey, oauthToken: OAuthToken) {
        return this.authRequest.post(url, params, oauthKey, oauthToken);
    }

}
