import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(date: any): any {
    let currentDate: any = moment(new Date());
    let fromDate = moment(date);
    fromDate.locale('es');
    currentDate.locale('es');
    let minutesBetween = fromDate.diff(currentDate, 'minutes');
    let hoursBetween = minutesBetween / 60;
    let daysBetween = hoursBetween / 24;
    let monthsBetween = Math.floor(daysBetween / 30);
    let additionalDays = 0;
    if(daysBetween > 9 && monthsBetween == 0) {
      additionalDays = daysBetween;
    }
    if(monthsBetween > 0) {
      additionalDays = daysBetween - (monthsBetween * 30);
    }
    let response: string = '';
    if (minutesBetween >= 1 && minutesBetween <= 59) {
      response = `hace ${Math.round(minutesBetween)} min`
    } else if (hoursBetween >= 1 && hoursBetween <= 24) {
      response = `hace ${Math.round(hoursBetween)} hrs`
    } else if (monthsBetween == 0 && (daysBetween >= 1 && daysBetween <= 9)) {
      response = `hace ${Math.round(daysBetween)} días`
    } else if (daysBetween > 9) {
      response = `hace ${Math.round(monthsBetween)} ${Math.round(monthsBetween) == 1 ? 'mes' : 'meses'} y ${Math.round(additionalDays)} días`
    }
    return response;
  }

}
