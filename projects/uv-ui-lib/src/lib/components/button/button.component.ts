import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['../../scss/_styles.scss']
})
export class ButtonComponent implements OnInit {

  @Input() btnText: string;
  @Output() onClick = new EventEmitter<any>();
  @Input() buttonConfig: BtnConfig;  

  constructor() { }

  ngOnInit(): void {
    if(!this.buttonConfig){
      this.buttonConfig = {};
    }
  }

  onClickButton(event) {
    this.onClick.emit(event);
  }

}

interface BtnConfig {
  disabled?: boolean,
  active?: boolean,
  focus?: boolean
}
