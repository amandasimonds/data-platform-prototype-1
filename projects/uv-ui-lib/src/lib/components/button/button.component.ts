import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: '<a (click)="onClickButton($event)">{{btnText}}</a>',
  styleUrls: ['../../scss/_styles.scss']
})
export class ButtonComponent implements OnInit {

  @Input() btnText: string;
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(event) {
    this.onClick.emit(event);
  }

}

interface BtnConfig{
  disabled?: boolean,
  active?: boolean,
  focus?: boolean
}
