import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { compareTasksData } from './compareTasks';
import { dropdownItems } from './dropdownItems';

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

    constructor(private headerService: HeaderService) {}

    public ngOnInit(): void {
        this.headerService.setTitle('Side By Side');
        this.headerService.setAppIcon('apps-sbs');
    }
}
