import { EventEmitter } from "@angular/core";
import { SearchResult } from "../search/models/search-result.model";
import { allSearchResults } from "../search/search-results/sample-search-results/allSearchResults";
import { documentsResults } from "../search/search-results/sample-search-results/documentsResults";
import { partsResults } from "../search/search-results/sample-search-results/partsResults";
import { requirementsResults } from "../search/search-results/sample-search-results/requirementsResults";

export class SearchService {
    public documentsSearchResults: SearchResult[] = documentsResults;
    public requirementsSearchResults: SearchResult[] = requirementsResults;
    public partsSearchResults: SearchResult[] = partsResults;
    public allSearchResults: SearchResult[] = allSearchResults;
    // public categorySelected = new EventEmitter<SearchResult[]>();
    public categorySelected = new EventEmitter<string>();

    constructor() {}
   
    public currentResultsTitle(searchResults: SearchResult[]): string {
        return searchResults[0].category;
    }

    getDocumentsResults(){
        return this.documentsSearchResults.slice();
    }

    getRequirementsResults(){
        return this.requirementsSearchResults.slice();
    }

    getPartsResults(){
        return this.partsSearchResults.slice();
    }

    getAllSearchResults(){
        return this.allSearchResults.slice();
    }

}
