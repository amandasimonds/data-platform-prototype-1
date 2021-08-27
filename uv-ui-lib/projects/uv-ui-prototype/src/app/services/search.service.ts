import { SearchResult } from '../search/models/search-result.model';
import { allSearchResults } from '../search/search-results/sample-search-results/allSearchResults';
import * as configurationsData from '../../sample-data/configurations.json';
import * as partsData from '../../sample-data/parts.json';

export class SearchService {
    public allSearchResults: SearchResult[] = allSearchResults;

    public getAllSearchResults(): SearchResult[]{
        return this.allSearchResults.slice();
    }

    // public getData() {
    //     var data = [...configurationsData, ...partsData];
    //     console.log(data);
    // }

    public typeAheadSearch(input: string) {
        let results = this.allSearchResults.slice();
        results = results.filter(item => 
            item.title.toLowerCase().includes(input.toLowerCase())
        );

        return results;
    }
}
