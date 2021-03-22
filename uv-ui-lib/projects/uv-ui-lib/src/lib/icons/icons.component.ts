import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { UvIcons, Icons } from './icons';

@Component({
  selector: 'lib-uv-ui-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['../scss/_styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconsComponent implements OnInit {

    private icons: Icons;

    @Input()
        public set name(iconName: string) {
        this.element.nativeElement = this.setIcon(this.icons[iconName]);
    }

    constructor(private element: ElementRef, private renderer: Renderer2, private uvIcons: UvIcons) {
        this.icons = this.uvIcons.getIcons();
    }

    public setIcon(html: string): Element {
        const doc = document.createElement('span');
        doc.style.cssText="display: inline-block; width: 100px; height: 100px; background-color:";
        doc.innerHTML = html;
        console.log("setIcon ran", doc);

        return doc;
    }

    public ngOnInit(): void {
        this.renderer.setAttribute(this.element.nativeElement, 'id', 'lib-icon');
        console.log("ngOnInit - this.element", this.element.nativeElement);
    }
}