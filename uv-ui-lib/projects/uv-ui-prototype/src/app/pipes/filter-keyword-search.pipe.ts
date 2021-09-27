import { Pipe, PipeTransform } from '@angular/core';
import { ISbsFilter } from '../models/sbs-filter.model';

@Pipe({
    name:'search'
})
export class FilterKeywordSearchPipe implements PipeTransform {
   public transform(filters: ISbsFilter[], searchInput: string): ISbsFilter[]{
        if(!searchInput) {
            return  [];
        }

        let keywordsSearch: ISbsFilter[] = [];
        searchInput.toLowerCase();

        for (let item of filters){
            for (let j = 0; j < item.keywords.length; j++){
                keywordsSearch = filters.filter(item => item.active);
            }
        }

        return keywordsSearch;
    }
}
