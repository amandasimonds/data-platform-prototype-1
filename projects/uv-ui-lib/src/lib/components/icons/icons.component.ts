import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { uvIcons } from './icons';

@Component({
  selector: 'lib-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['../../scss/_styles.scss']
})
export class IconsComponent implements OnInit {

  @Input()
    set name(iconName : string) {
      this.element.nativeElement.innerHTML = uvIcons[iconName] || null
    }
    set color(iconColor : string) {
      this.fill.nativeElement.innerHTML = uvIcons[iconColor] || null
    }
  constructor(private element: ElementRef, private fill: ElementRef) { }

  ngOnInit(): void {
  }

}
