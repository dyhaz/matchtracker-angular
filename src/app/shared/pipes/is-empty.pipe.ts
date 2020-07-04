import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'isEmpty'})
export class IsEmptyPipe implements PipeTransform {
  transform(collection: any): boolean {
    if (collection == null) {
      return true;
    }

    if (!Array.isArray(collection)) {
      collection = Object.keys(collection).map((key) => collection[key]);
    }

    return Array.isArray(collection) && collection.length === 0;
  }
}
