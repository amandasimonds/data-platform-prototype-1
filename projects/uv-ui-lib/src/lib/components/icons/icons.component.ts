import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { uvIcons } from './icons';

@Component({
  selector: 'lib-icons',
  template: '',
  styleUrls: ['../../scss/_styles.scss']
})
export class IconsComponent implements OnInit {

  @Input()
    set name(iconName : string) {
      this.element.nativeElement.innerHTML = uvIcons[iconName] || null
    }

  @Input()
    set id(id : string) {
      this.element.nativeElement.innerHTML = "lib-icon" || null
    }

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
  }


}
