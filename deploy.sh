#!/usr/bin/env bash
ng build --prod --source-map
scp -P 43210 -rp ./dist/footballgo-pwa/* sysadmin@innodev.vnetcloud.com:/home/sysadmin/www/matchtracker/

