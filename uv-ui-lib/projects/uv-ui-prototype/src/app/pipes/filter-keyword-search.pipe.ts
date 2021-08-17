import { Pipe, PipeTransform } from '@angular/core';
import { ISbsFilter } from '../models/sbs-filter.model';

@Pipe({
    name:'search'
})
export class FilterKeywordSearchPipe implements PipeTransform {
    transform(filters: ISbsFilter[], searchInput: string): ISbsFilter[]{    
        if(!searchInput) {
            return  [];
        }

        let keywordsSearch: ISbsFilter[] = [];
        searchInput = searchInput.toLowerCase();
        
        for (let i = 0; i <= filters.length; i++){
            for (let j = 0; j < filters[i].keywords.length; j++){
                console.log(filters[i].keywords[j].name);
                keywordsSearch = filters.filter(item => item.active);
                // keywordsSearch = filters[i].keywords.filter((item) => item.name.toLowerCase().includes(searchInput));
                console.log('forloop', keywordsSearch);
            }
        }
        console.log('end of pipe', keywordsSearch);
        return keywordsSearch;
    }
}
