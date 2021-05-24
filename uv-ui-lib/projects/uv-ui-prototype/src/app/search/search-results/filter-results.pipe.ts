import { Pipe, PipeTransform } from '@angular/core';
import { SearchResult } from '../models/search-result.model';

@Pipe({name: 'filterResults'})
export class FilterResultsPipe implements PipeTransform {
  transform(items: SearchResult[], filter: string): SearchResult[] {
      return items.filter(item => item.category === filter);
  }
}
