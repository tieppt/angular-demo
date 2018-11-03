import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'fdate',
  pure: false
})
export class FdatePipe implements PipeTransform {
  transform(value: any, ...args): any {
    return format(value, args[0]);
  }
}
