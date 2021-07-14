import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { INavBarSub } from '../interfaces/navbar-sub.interfaces';

@Component({
  selector: 'uvx-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnippetComponent {

    @Input() public snippets: INavBarSub[] = [];
    @Output() public readonly snippetEvent = new EventEmitter<Event>();

    public snippetClicked($event: Event): void {
        this.snippetEvent.emit($event);
    }

    public trackByFn(_: number, {snippetHeading}: INavBarSub): string {
        return snippetHeading;
    }

}
