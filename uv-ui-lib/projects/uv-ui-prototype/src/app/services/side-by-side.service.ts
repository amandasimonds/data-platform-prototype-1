import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISbsSourceDocument } from '../side-by-side/models/sbs-source-document.model';
import { ISbsTargetDocument } from '../side-by-side/models/sbs-target-document.model';
import { sourceDocumentSamples } from '../side-by-side/sample-data/source-documents';
import { targetDocumentSamples } from '../side-by-side/sample-data/target-documents';

@Injectable()
export class SidebySideService {

    private targetDocumentSelectedEvent = new BehaviorSubject<ISbsTargetDocument[]>([]);
    private sourceDocumentSelectedEvent = new BehaviorSubject<ISbsSourceDocument[]>([]);
    readonly selectedTargetDocuments$ = this.targetDocumentSelectedEvent.asObservable();
    readonly sourceDocuments$ = this.sourceDocumentSelectedEvent.asObservable();

    public targetDocuments: ISbsTargetDocument[] = targetDocumentSamples;
    public sourceDocuments: ISbsSourceDocument[] = sourceDocumentSamples;

    public getTargetDocuments(): ISbsTargetDocument[]{
        return this.targetDocumentSelectedEvent.value.slice();
    }

    public getSourceDocuments(): ISbsSourceDocument[]{
        return this.sourceDocuments.slice();
    }

    public selectSourceDocuments(document: ISbsSourceDocument){
        const sourceDocs = [...this.sourceDocumentSelectedEvent.value, document]
        this.sourceDocumentSelectedEvent.next(sourceDocs);
    }

    public selectTargetDocument(document: ISbsTargetDocument){
        const selectedTargetDocs = [...this.targetDocumentSelectedEvent.value, document]
        this.targetDocumentSelectedEvent.next(selectedTargetDocs);
    }

}
