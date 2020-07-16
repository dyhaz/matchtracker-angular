export function migrationFactory() {
  return {
    1: (db, transaction) => {
      const store = transaction.objectStore('team');
      store.createIndex('id', 'id', { unique: true });
    },
    2: (db, transaction) => {
      const store = transaction.objectStore('competition');
      store.createIndex('id', 'id', { unique: true });
    }
  };
}

export const defaultEnv = {
  social: {
    facebook: 'https://facebook.com/dicoding',
    instagram: 'https://instagram.com/dicoding',
    google: '',
    twitter: 'https://twitter.com/dicoding',
    youtube: 'https://youtube.com/channel/UCM6BWkgiGrCHG967i_PyMiw',
  },

  wikipedia: {
    endpoint:  'https://en.wikipedia.org/api/rest_v1/'
  },

  dbConfig: {
    name: 'MatchTrackerDb',
    version: 2,
    objectStoresMeta: [{
      store: 'team',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'id', keypath: 'id', options: { unique: true } },
        { name: 'name', keypath: 'name', options: { unique: true } },
        { name: 'shortName', keypath: 'shortName', options: { unique: false } },
        { name: 'crestUrl', keypath: 'crestUrl', options: { unique: false } },
        { name: 'description', keypath: 'description', options: { unique: false } },
        { name: 'website', keypath: 'website', options: { unique: false } },
      ]
    }, {
      store: 'competition',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'id', keypath: 'id', options: { unique: true } },
        { name: 'name', keypath: 'name', options: { unique: true } },
        { name: 'code', keypath: 'code', options: { unique: true } },
        { name: 'emblemUrl', keypath: 'emblemUrl', options: { unique: false } },
        { name: 'description', keypath: 'description', options: { unique: false } },
      ]
    }],
    migrationFactory
  },

  firebaseConfig: {
    apiKey: 'AIzaSyDP33CYZIErzV8Hc1S_TUmjhgfMsKGVEdY',
    authDomain: 'pushnotifku.firebaseapp.com',
    databaseURL: 'https://pushnotifku.firebaseio.com',
    projectId: 'pushnotifku',
    storageBucket: 'pushnotifku.appspot.com',
    messagingSenderId: '740346467510',
    appId: '1:740346467510:web:350e9b5997bfc8b96fc217',
    measurementId: 'G-TRHETXMLCC'
  },

  vapidPublicKey: 'BC8k7VqS6AdDYlE2AKcoxCE9ctQFmF25YC51MR0h_SWKULlx-Ud9xxDZUtmEvFzxG-TGDyP_lM1jC3-VGg0BP7g',

  pushMessageApiUrl: 'https://api.matchtracker.site/'
};
