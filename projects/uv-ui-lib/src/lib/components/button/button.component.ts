import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['../../scss/_styles.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonType: string;
  @Input() buttonText: string;
  @Input() iconName: string;

  constructor() { }

  ngOnInit(): void {

  }
}

interface BtnConfig {
  disabled?: boolean,
  active?: boolean,
  focus?: boolean
}
