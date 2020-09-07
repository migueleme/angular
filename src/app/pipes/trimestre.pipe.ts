import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'trimestre'
})
export class TrimestrePipe extends DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Math.ceil(+super.transform(value,'MM')/3)
  }

}
