import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISbsSourceDocument } from '../models/sbs-source-document.model';
import { ISbsTargetDocument } from '../models/sbs-target-document.model';
import { sourceDocumentSamples } from '../side-by-side/sample-data/source-documents';
import { targetDocumentSamples } from '../side-by-side/sample-data/target-documents';

@Injectable()
export class SidebySideService {

    private targetDocumentSelectedEvent = new BehaviorSubject<ISbsTargetDocument[]>([]);
    private sourceDocumentSelectedEvent = new BehaviorSubject<ISbsSourceDocument[]>([]);

    readonly selectedTargetDocuments$ = this.targetDocumentSelectedEvent.asObservable();
    readonly sourceDocumentsList$ = this.sourceDocumentSelectedEvent.asObservable();

    private targetDocuments: ISbsTargetDocument[] = targetDocumentSamples;
    private sourceDocuments: ISbsSourceDocument[] = sourceDocumentSamples;

    @Output() sourceDocumentSelected = new EventEmitter<boolean>();

    public getTargetDocuments(): ISbsTargetDocument[]{
        return this.targetDocuments.slice();
    }

    public getSourceDocuments(): ISbsSourceDocument[]{
        return this.sourceDocuments.slice();
    }

    public selectSourceDocument(document: ISbsSourceDocument, i: number){
        document.active = !document.active;
        let sourceDocsList: ISbsSourceDocument[] = [];
        const exceptIndex = i;
        if (document.active) {
            this.sourceDocumentSelected.emit(true);
            sourceDocsList = this.getSourceDocuments()
            .filter((item, index) => exceptIndex !== index)
            .map(item => {
                return {...item, disabled: item.disabled = true};
            });
        } else {
            this.sourceDocumentSelected.emit(false);
            sourceDocsList = this.getSourceDocuments()
            .map(item => {
                return {...item, disabled: item.disabled = false};
            });
        }
        this.sourceDocumentSelectedEvent.next(sourceDocsList);
    }

    public selectTargetDocument(document: ISbsTargetDocument){
        const selectedTargetDocs = [...this.targetDocumentSelectedEvent.value, document].filter(item => item.active === true);
        this.targetDocumentSelectedEvent.next(selectedTargetDocs);
    }

    unselectTargetDocument(document: ISbsTargetDocument) {
        document.active = !document.active;
        const selectedTargetDocs = [...this.targetDocumentSelectedEvent.value, document].filter(item => item.active === true);
        this.targetDocumentSelectedEvent.next(selectedTargetDocs);
    }

    public getSelectedTargetDocuments(): ISbsTargetDocument[]{
        return this.targetDocumentSelectedEvent.value.slice();
    }

    public clearTargetDocumentSelections(items: ISbsTargetDocument[]){
        let selectedTargetDocs = items.map(item => {
            return {...item, active: item.active = false};
        });
        selectedTargetDocs = selectedTargetDocs.filter(item => item.active === true);
        this.targetDocumentSelectedEvent.next(selectedTargetDocs);
    }
}
