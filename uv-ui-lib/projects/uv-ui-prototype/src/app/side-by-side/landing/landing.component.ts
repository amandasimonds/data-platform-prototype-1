import { Component, ChangeDetectionStrategy, Input, OnInit, } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { SidebySideService } from '../../services/side-by-side.service';

@Component({
  selector: 'uv-prototype-sbs-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBySideLandingComponent implements OnInit {

    @Input() public sourceDocumentSelected = false;

    constructor(private sbsService: SidebySideService, private destroy$: NgOnDestroyService) {
    }

    ngOnInit(): void {
        this.sbsService.sourceDocumentSelected
        .pipe(takeUntil(this.destroy$))
        .subscribe((sourceDocumentSelected: boolean) => {
                this.sourceDocumentSelected = sourceDocumentSelected;
        })        
    }
}
