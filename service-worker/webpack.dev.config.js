// DEV Webpack configuration used to build the service worker

let WebpackPwaManifest = require('webpack-pwa-manifest')

const path = require("path");

const webBuildTargetFolder = path.join(__dirname, "..", "dist", "apps", "web");
const targetServiceWorkerFilename = "service-worker.js";

module.exports = {
  target: "node",
  mode: "none",
  // WARNING: commented out to disable source maps
  //devtool: 'inline-source-map',
  entry: {
    index: path.join(__dirname, '..', "src", "service-worker.ts"),
  },
  resolve: { extensions: [".js", ".ts"] },
  output: {
    path: webBuildTargetFolder,
    filename: targetServiceWorkerFilename,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          onlyCompileBundledFiles: true,
        },
      },
    ],
  },
  plugins: [
    new WebpackPwaManifest({
      name: 'MatchTracker Online Match Updates',
      short_name: 'MatchTracker',
      description: 'My awesome Progressive Web App!',
      background_color: '#ffffff',
      crossorigin: 'anonymous', //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/assets/icons/icon-alt-128x128.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        {
          src: path.resolve('src/assets/icons/icon-512x512.png'),
          size: '1024x1024' // you can also use the specifications pattern
        },
        {
          src: path.resolve('src/assets/icons/maskable-icon.png'),
          size: '1024x1024',
          purpose: 'maskable'
        }
      ],
      gcm_sender_id: "740346467510"
    })
  ],
};
