import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { UvIcons, Icons } from './icons';

@Component({
  selector: 'lib-uv-ui-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['../scss/_styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconsComponent implements OnInit {

    public svg: SafeHtml = '';
    private icons: Icons;

    @Input()
        public set name(iconName: string) {
        this.svg = this.sanitizer.bypassSecurityTrustHtml(this.icons[iconName]);
    }

    constructor(private sanitizer: DomSanitizer, private element: ElementRef, private renderer: Renderer2, private uvIcons: UvIcons) {
        this.icons = this.uvIcons.getIcons();
    }

    public ngOnInit(): void {
        this.renderer.setAttribute(this.element.nativeElement, 'id', 'lib-icon');
    }
}
