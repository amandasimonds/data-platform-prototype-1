export interface ISbsSourceDocument { 
    id: number;
	title: string;
	description: string;
	active: boolean;
    showDetails: boolean;
    tags: string[];
    details: string;
    disabled: boolean;
}
