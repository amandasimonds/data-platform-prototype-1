import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterActiveDocuments'
})

export class FilterActiveDocumentsPipe implements PipeTransform {
  public transform(items: any[]): any {
      return items.filter(item => item.filterArg === true);
  }
}
