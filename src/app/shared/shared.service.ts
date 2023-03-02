import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable()
export class SharedService {

  constructor(
    private datePipe: DatePipe
  ) { }

  addDays(numOfDays: number, date = new Date(), format = 'shortDate'): string {
    date.setDate(date.getDate() + numOfDays);
    return this.datePipe.transform(date, format);
  }

  filterObject(object, allowed): {} {
    return Object.keys(object)
    .filter(key => !allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = object[key].toString();
      return obj;
    }, {});
  }


}
