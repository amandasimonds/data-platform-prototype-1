import { SearchResult } from "../search/models/search-result.model";

export interface WizardDataModel {
    role: string;
    goal: string;
    entity: SearchResult;
    filter1: number;
    filter2: number;
    filter3: number;
  }
  