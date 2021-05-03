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

    public cssClasses = ['btn', 'btn-svg'];

    public getCssClasses(): void {
        this.cssClasses.push(this.color);
    }

    public ngOnInit(): void {
        this.getCssClasses();
    }
}
