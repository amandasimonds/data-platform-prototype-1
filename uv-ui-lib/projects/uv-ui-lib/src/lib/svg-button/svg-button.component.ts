import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-uv-ui-svg-button',
  templateUrl: './svg-button.component.html',
  styleUrls: ['./svg-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgButtonComponent implements OnInit {
    @Input() public svgPath = '';
    @Input() public color: 'gray' | 'blue' | 'black' = 'black';
    @Input() public size: 'small' | 'xs' | 'xxs' = 'small';

    // public cssClasses = ['btn', 'btn-svg'];

    public getCssClasses(): void {
        this.cssClasses.push(this.color, this.size);
    }

    public ngOnInit(): void {
        this.getCssClasses();
    }

    public get cssClasses(): string[] {

        return ['btn', 'btn-svg', this.color, this.size];
    }
}
