import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'hourFormat'})
export class HourFormatPipe implements PipeTransform {
  static pad(n, width): string {
    const z = '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  transform(date: any, showUtc = true): string {
    if (date == null) {
      return '';
    }

    const hours = (new Date(date)).getHours();
    const mins = (new Date(date)).getMinutes();
    const hoursUTC = (new Date(date)).getUTCHours();
    const minsUTC = (new Date(date)).getUTCMinutes();
    return HourFormatPipe.pad(hours, 2) + ':' + HourFormatPipe.pad(mins, 2) +
      (showUtc ? ' (' + HourFormatPipe.pad(hoursUTC, 2) + ':' + HourFormatPipe.pad(minsUTC, 2) + ' UTC)' : '');
  }
}
