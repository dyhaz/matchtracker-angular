const webPush = require('web-push');

const vapidKeys = {
  "publicKey": "BC8k7VqS6AdDYlE2AKcoxCE9ctQFmF25YC51MR0h_SWKULlx-Ud9xxDZUtmEvFzxG-TGDyP_lM1jC3-VGg0BP7g",
  "privateKey": "6utTJGz837tFW2HvCVgtqVUBJliNnV_px5FdEbaVUmU"
};


webPush.setVapidDetails(
  'mailto:muhammad-11@fst.unair.ac.id',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
const pushSubscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/dS5srnTXijs:APA91bGnwnu7S7oVU0TvzNR1drf7WkW8hhDpIMOqQcGPQtmaqS0l_-mW67DVyPXE6U_9hr96bZPKAFOR7s_EXcULm4cUUZB5l8Xoken7qkywpgSsBsNcuucBhxZXItYIXUfpTV57QjVu\n",
  "keys": {
    "p256dh": "BBlVlCs5I-zHNdTE476ZzdcwUMnE-DREF2bahIydkWeV1eQ6Hi-lYh594D-rOO7Av3abIJxJIQvOhEmXvYfKchA",
    "auth": "voduza_E_WQkEk8BN2XjpA"
  }
};
const payload = {
  message : 'You have a notification!'
};

const options = {
  gcmAPIKey: 'AIzaSyDP33CYZIErzV8Hc1S_TUmjhgfMsKGVEdY',
  TTL: 60
};

webPush.sendNotification(
  pushSubscription,
  JSON.stringify(payload),
  options
).then(function() {
  console.log('Push notification sent to user!');
}).catch(function(err) {
  if (err.code === 'expired-subscription') {
    // The user's push token data is no longer valid
    // and should be discarded.
  } else {
    console.log('Error occurred!', err);
  }
});

