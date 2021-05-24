import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { compareTasksData } from './compareTasks';
import { dropdownItems } from './dropdownItems';
import { HeaderService } from '../services/header.service';

@Component({
    selector: 'prototype-uv-ui-side-by-side',
    templateUrl: './side-by-side.component.html',
    styleUrls: ['./side-by-side.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBySideComponent implements OnInit{
    public loadTask = true;
    public compareTasks = compareTasksData;
    public dropdownItems = dropdownItems;

    constructor( private headerService: HeaderService ) {}

    public addTaskClicked(event: Event): void {
        console.log(event, 'add task was clicked');
    }

    public switchFilterClicked(event: Event): void {
        console.log(event, 'filter button was clicked');
    }

    ngOnInit(): void {
        this.headerService.setTitle('Side By Side')
        this.headerService.setAppIcon('assets/apps-sbs.svg#sideBySide')
    }

}
