import { Pipe, PipeTransform } from '@angular/core';
import { ISbsSourceDocument } from '../models/sbs-source-document.model';

@Pipe({
    name: 'filterActiveDocuments'
})

export class FilterActiveDocumentsPipe implements PipeTransform {
  public transform(items: ISbsSourceDocument[]): ISbsSourceDocument[] {
      return items.filter(item => item.active === true);
  }
}
