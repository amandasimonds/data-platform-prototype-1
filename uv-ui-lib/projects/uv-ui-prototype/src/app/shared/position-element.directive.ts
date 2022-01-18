import { AfterViewChecked, AfterViewInit, Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[yPosition]'
})
export class PositionElementDirective {

  @Input() topPosition: number;
  @Input() stylePos = 'relative'

  constructor(private el: ElementRef) { 
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
      this.el.nativeElement.style.position = this.stylePos;
      this.el.nativeElement.style.top = `${this.topPosition}px`;
  //   console.log(
  //     this.el.nativeElement.id, '\n',
  //     this.topPosition, '\n',
  //     this.el.nativeElement.style.top, '\n',
  //     this.el.nativeElement.offsetTop);
  }
}
