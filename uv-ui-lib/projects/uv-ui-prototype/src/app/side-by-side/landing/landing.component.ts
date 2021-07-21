import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'uv-prototype-sbs-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBySideLandingComponent implements OnInit {

    public sourceDocumentSelected = false;

  constructor() { }

  ngOnInit(): void {
  }

}
