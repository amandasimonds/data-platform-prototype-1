import { Component, ChangeDetectionStrategy, Input, OnInit, } from '@angular/core';
import { SidebySideService } from '../../services/side-by-side.service';

@Component({
  selector: 'uv-prototype-sbs-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBySideLandingComponent implements OnInit {

    @Input() public sourceDocumentSelected = false;

    constructor(private sbsService: SidebySideService) {
    }

    ngOnInit(): void {
        this.sbsService.sourceDocumentSelected
      .subscribe((sourceDocumentSelected: boolean) => {
        this.sourceDocumentSelected = sourceDocumentSelected;
      })        
    }
}
