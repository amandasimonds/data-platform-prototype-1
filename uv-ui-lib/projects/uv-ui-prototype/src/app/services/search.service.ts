import { SearchResult } from '../search/models/search-result.model';
import { allSearchResults } from '../search/search-results/sample-search-results/allSearchResults';

export class SearchService {
    public allSearchResults: SearchResult[] = allSearchResults;

    public getAllSearchResults(): SearchResult[]{
        return this.allSearchResults.slice();
    }
}
