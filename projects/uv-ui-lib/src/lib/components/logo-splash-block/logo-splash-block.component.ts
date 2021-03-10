import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-logo-splash-block',
  templateUrl: './logo-splash-block.component.html',
  styleUrls: ['../../scss/_styles.scss']
})
export class LogoSplashBlockComponent implements OnInit {

  @Input() headingText : string;
  @Input() blurbText : string;

  constructor() { }

  ngOnInit(): void {
  }

}
