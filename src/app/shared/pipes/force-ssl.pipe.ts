import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'forceSsl'})
export class ForceSslPipe implements PipeTransform {
  transform(url: any): string {
    if (url == null || url === '') {
      return '';
    }

    return url.replace(/^http:\/\//i, 'https://');
  }
}
