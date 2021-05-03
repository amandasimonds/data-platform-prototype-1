import { ChangeDetectionStrategy, Component } from '@angular/core';
import { compareTasksData } from './compareTasks';
import { dropdownItems } from './dropdownItems';

@Component({
    selector: 'prototype-uv-ui-side-by-side',
    templateUrl: './side-by-side.component.html',
    styleUrls: ['./side-by-side.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBySideComponent {
    public loadTask = true;
    public compareTasks = compareTasksData;
    public dropdownItems = dropdownItems;

    public addTaskClicked(event: Event): void {
        console.log(event, 'add task was clicked');
    }

    public switchFilterClicked(event: Event): void {
        console.log(event, 'filter button was clicked');
    }

}
