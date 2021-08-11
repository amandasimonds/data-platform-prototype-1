import { Pipe, PipeTransform } from '@angular/core';
import { ISbsKeyword } from '../side-by-side/models/sbs-keyword.model';
@Pipe({
    name:'search'
})
export class FilterKeywordSearchPipe implements PipeTransform {
    transform(filterKeywords: ISbsKeyword[], searchInput: string): any[]{     
        if(!searchInput) {
            return  [];
        }
       searchInput = searchInput.toLowerCase();
       return filterKeywords.filter(
           item => item.name.toLowerCase().includes(searchInput)
       )
     }
}
