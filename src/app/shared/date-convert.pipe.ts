import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'
import { ServerService } from '../server.service';

@Pipe({
  name: 'dateConvert'
})
export class DateConvertPipe implements PipeTransform {
  constructor(private data: ServerService) {}

  transform(data: any): unknown {
    return moment.unix(parseInt(data)).format('MMMM Do YYYY, h:mm:ss a')
  }

}
