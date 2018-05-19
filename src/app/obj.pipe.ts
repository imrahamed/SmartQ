import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'obj'
})
export class ObjPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const keys = [];
    for (const key in value) {
      keys.push(key);
    }
    return keys;
  }

}
