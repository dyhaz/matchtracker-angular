// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {defaultEnv} from './default';

export const environment = {
  ...defaultEnv,
  production: false,
  // apiUrl: 'http://private-anon-8f1f08dccf-dicodingfootball.apiary-mock.com/api/v1/json/1/',
  apiUrl: 'http://api.football-data.org/v2/',
  apiToken: '5f50595a4f8544b593c51a032ad58950',
  twitterApiKey: '1hfFOH5OMI1U282ZtUNddgcfA',
  twitterApiSecret: 'AKnkKTc5ey7CpsPAlldK3VKIExHEVLYrOoY1AnGO9OnJ1mRuOF',
  twitterAccessToken: '248085792-mTLg35KR53RgaLOd17V5bvIVRDriLmurTrpamsiF',
  twitterAccessSecret: 'VzXXLvln0ZSaKf2Cw0IompX3hRhnTPQnMxfCRKyjRuU9n'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
