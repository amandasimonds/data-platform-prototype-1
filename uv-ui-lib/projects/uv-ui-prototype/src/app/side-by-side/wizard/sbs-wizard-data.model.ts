import { SearchResult } from "../../search/models/search-result.model";

export interface SbsWizardDataModel {
    locations: string[];
    goal: string;
    focus: string;
    entity: SearchResult | null;
    stepOneComplete: boolean;
    stepTwoComplete: boolean;
    stepThreeComplete: boolean;
    stepOneSkip: boolean;
    stepTwoSkip: boolean;
    stepThreeSkip: boolean;
}
