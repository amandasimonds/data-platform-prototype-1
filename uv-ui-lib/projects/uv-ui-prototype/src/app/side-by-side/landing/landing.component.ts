import { Component, ChangeDetectionStrategy, Input, } from '@angular/core';

@Component({
  selector: 'uv-prototype-sbs-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBySideLandingComponent {

    @Input() public sourceDocumentSelected = false;

    onSourceDocumentClick() {
        this.sourceDocumentSelected = !this.sourceDocumentSelected;
    }

}
