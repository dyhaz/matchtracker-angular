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
  "endpoint": "<Endpoint URL>",
  "keys": {
    "p256dh": "<p256dh Key>",
    "auth": "<Auth key>"
  }
};
const payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

const options = {
  gcmAPIKey: '740346467510',
  TTL: 60
};
webPush.sendNotification(
  pushSubscription,
  payload,
  options
);
