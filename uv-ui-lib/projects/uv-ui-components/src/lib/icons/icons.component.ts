import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { uvIcons } from './icons';

@Component({
  selector: 'lib-uv-ui-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['../scss/_styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconsComponent implements OnInit {

  @Input()
    public set name(iconName: string) {
      this.element.nativeElement.innerHTML = uvIcons[iconName] || null ;
    }

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  public ngOnInit(): void {
    this.renderer.setAttribute(this.element.nativeElement, 'id', 'lib-icon');
  }

}
