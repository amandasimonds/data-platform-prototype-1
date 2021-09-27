import { ISbsKeyword } from './sbs-keyword.model';

export interface ISbsFilter {
	name: string;
	active: boolean;
    keywords: ISbsKeyword[];
}
