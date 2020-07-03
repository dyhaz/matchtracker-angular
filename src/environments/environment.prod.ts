import {defaultEnv} from './default';

export const environment = {
  ...defaultEnv,
  production: true,
  apiUrl: 'http://api.football-data.org/v2/',
  apiToken: '5f50595a4f8544b593c51a032ad58950'
};
