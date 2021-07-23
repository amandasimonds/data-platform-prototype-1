import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, OnChanges, Input, DoCheck } from '@angular/core';
import { SidebySideService } from '../../services/side-by-side.service';
import { ISbsSourceDocument } from '../models/sbs-source-document.model';

@Component({
  selector: 'uv-prototype-sbs-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBySideLandingComponent implements OnInit, DoCheck {

    @Output() onSourceDocumentSelected = new EventEmitter<boolean>();
    @Output() emitSourceDocument = new EventEmitter<any>();

    @Input() public sourceDocumentSelected = false;

    selectedSourceDocument: ISbsSourceDocument = {
        id: 1,
        title:'',
        description: 'string',
        active: false,
        tags: []
    };

    onSourceDocumentClick() {
        this.onSourceDocumentSelected.emit(true);
        this.sourceDocumentSelected = true;
    }

    constructor(private sbsService: SidebySideService) { }

    ngOnInit(): void {
        this.sbsService.sourceDocumentSelected
            .subscribe(
                (document: ISbsSourceDocument) => {
                    this.selectedSourceDocument = document;
                }
            )
    }

    ngDoCheck(): void {
        console.log('landing', this.sourceDocumentSelected);
    }

}
