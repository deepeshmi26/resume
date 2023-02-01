import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFormat'
})
export class NameFormatPipe implements PipeTransform {

  transform(value: string): string {
    let result: string = value.toLowerCase().replace(/-/g, " ");
    result = result.charAt(0).toUpperCase() + result.slice(1);
    return result;
  }

}
