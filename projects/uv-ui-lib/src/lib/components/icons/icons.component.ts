import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { uvIcons } from './icons';

@Component({
  selector: 'lib-icons',
  template: '<span id="lib-icon"></span>',
  styleUrls: ['../../scss/_styles.scss']
})
export class IconsComponent implements OnInit {

  @Input()
    set name(iconName : string) {
      this.element.nativeElement.innerHTML = uvIcons[iconName] || null
    }

  constructor(private element: ElementRef, private renderer : Renderer2) {
  }

  ngOnInit(): void {
    // this.renderer.setAttribute(this.element.nativeElement, 'id', 'lib-icon');
    // this.renderer.setProperty(this.element.nativeElement, 'id', 'lib-icon');
  }


}
