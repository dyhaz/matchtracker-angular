#!/usr/bin/env bash
ng build --prod --source-map
http-server-spa dist/footballgo-pwa/ index.html 18080
