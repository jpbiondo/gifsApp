import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardtitle'
})
export class CardTitlePipe implements PipeTransform {
  transform(cardTitle: string): any {
    if(cardTitle.length >= 25)
      return cardTitle.slice(0,25).concat('...');
    return cardTitle;
  }
}
