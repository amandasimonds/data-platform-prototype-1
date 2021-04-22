import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { INavBarSub } from '../interfaces/navbar-sub.interfaces';

@Component({
  selector: 'lib-uv-ui-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnippetComponent {

    @Input() public snippets: INavBarSub[];
    @Input() public headingTxt = '';
    @Input() public subHeadingTxt = '';
    @Input() public snippetTxt = '';
    @Input() public snippetHeading = '';

    @Output() public readonly snippetEvent = new EventEmitter<Event>();

    constructor(){
        this.snippets = [];
    }

    public snippetClicked($event: Event): void {
        this.snippetEvent.emit($event);
    }

    public trackBySnippetTitle(_: number, snippet: INavBarSub): string {
        return snippet.snippetHeading;
    }

}
