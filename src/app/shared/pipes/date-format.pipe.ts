import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'dateFormat'})
export class DateFormatPipe implements PipeTransform {
  transform(date: any, showUtc = true): string {
    if (date == null) {
      return '';
    }

    const month = (new Date(date)).getMonth();
    const date1 = (new Date(date)).getDate();
    const year = (new Date(date)).getFullYear().toString().substr(-2);

    return date1 + '/' + month + '/' + year;
  }
}
