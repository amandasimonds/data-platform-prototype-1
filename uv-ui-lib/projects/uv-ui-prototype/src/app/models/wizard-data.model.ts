import { SearchResult } from "../search/models/search-result.model";

export interface WizardDataModel {
    role: string;
    goal: string;
    entity: SearchResult | null;
    filter1: number;
    filter2: number;
    filter3: number;
    stepOneComplete: boolean;
    stepTwoComplete: boolean;
    stepThreeComplete: boolean;
    stepOneSkip: boolean;
    stepTwoSkip: boolean;
    stepThreeSkip: boolean;
}
