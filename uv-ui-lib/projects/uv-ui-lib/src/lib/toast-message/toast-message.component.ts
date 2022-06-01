import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'uvx-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss']
})
export class ToastMessageComponent implements OnChanges {

  @Input() public displayToastMessage = false;

  // get displayToastMessageTriggered(): boolean {
  //   return this.displayToastMessage
  // }

  // @Input() public set displayToastMessageTriggered(trigger: boolean) {
  //   this.displayToastMessage = trigger;
  //   this.onToastMessageTriggered();
  // };

  @Input() public message = '';
  @Output() public displayOver = new EventEmitter<boolean>();

  constructor(private ref: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.displayToastMessage.currentValue === true) {
    //   this.onToastMessageTriggered();
    // }

    if (this.displayToastMessage) {
      this.onToastMessageTriggered();
    }
  }

  public onToastMessageTriggered() {
    this.displayToastMessage = true;
    setTimeout(() => {
      this.displayToastMessage = false;
      this.displayOver.emit(false);
      this.ref.detectChanges();
    }, 2000);
  }
}
