import { Pipe, PipeTransform } from '@angular/core';
import { SearchResult } from '../models/search-result.model';

@Pipe({name: 'filterResults'})
export class FilterResultsPipe implements PipeTransform {
  public transform(items: SearchResult[], filter: string): SearchResult[] {
    if(filter === 'All') {
        return  items;
    } else {
        return items.filter(item => item.category === filter);
    }
  }
}
