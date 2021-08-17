import { Pipe, PipeTransform } from '@angular/core';
import { ISbsTargetDocument } from '../models/sbs-target-document.model';

@Pipe({
    name: 'filterActiveDocuments'
})

export class FilterActiveDocumentsPipe implements PipeTransform {
  public transform(items: any[], filterArg: boolean): any {
      return items.filter(item => item.filterArg === true);
  }
}
