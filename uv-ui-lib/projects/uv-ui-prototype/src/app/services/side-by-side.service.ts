import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IEntity } from '../models/entity.model';
import { sourceDocumentSamples } from '../side-by-side/sample-data/source-documents';
import { targetDocumentSamples } from '../side-by-side/sample-data/target-documents';

@Injectable()
export class SidebySideService {

    private targetDocumentSelectedEvent = new BehaviorSubject<IEntity[]>([]);
    private sourceDocumentSelectedEvent = new BehaviorSubject<IEntity[]>([]);

    public readonly selectedTargetDocuments$ = this.targetDocumentSelectedEvent.asObservable();
    public readonly sourceDocumentsList$ = this.sourceDocumentSelectedEvent.asObservable();

    private targetDocuments: IEntity[] = targetDocumentSamples;
    private sourceDocuments: IEntity[] = sourceDocumentSamples;

    @Output() public readonly sourceDocumentSelected = new EventEmitter<boolean>();

    public getTargetDocuments(): IEntity[] {
        return this.targetDocuments.slice();
    }

    public getSourceDocuments(): IEntity[] {
        return this.sourceDocuments.slice();
    }

    public selectSourceDocument(document: IEntity, i: number): void {
        document.active = !document.active;
        let sourceDocsList: IEntity[] = [];
        const exceptIndex = i;
        if (document.active) {
            this.sourceDocumentSelected.emit(true);
            sourceDocsList = this.getSourceDocuments()
                .filter((item, index) => exceptIndex !== index)
                .map(item => ({
                    ...item,
                    disabled: !item.disabled
                }));
        } else {
            this.sourceDocumentSelected.emit(false);
            sourceDocsList = this.getSourceDocuments()
                .map(item => ({
                    ...item,
                    disabled: !item.disabled
                }));
        }
        this.sourceDocumentSelectedEvent.next(sourceDocsList);
    }

    public selectTargetDocument(document: IEntity): void {
        const selectedTargetDocs = [...this.targetDocumentSelectedEvent.value, document].filter(item => item.active);
        this.targetDocumentSelectedEvent.next(selectedTargetDocs);
    }

    public unselectTargetDocument(document: IEntity): void {
        document.active = !document.active;
        const selectedTargetDocs = [...this.targetDocumentSelectedEvent.value, document].filter(item => item.active);
        this.targetDocumentSelectedEvent.next(selectedTargetDocs);
    }

    public getSelectedTargetDocuments(): IEntity[] {
        return this.targetDocumentSelectedEvent.value.slice();
    }

    public clearTargetDocumentSelections(items: IEntity[]): void {
        let selectedTargetDocs = items.map(item => ({...item, active: !item.active}));
        selectedTargetDocs = selectedTargetDocs.filter(item => item.active);
        this.targetDocumentSelectedEvent.next(selectedTargetDocs);
    }
}
