import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ITask } from 'projects/uv-ui-lib/src/lib/interfaces/side-by-side.interfaces';
import { AppShellService } from '../services/app-shell.service';
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
    public tasks = compareTasksData;
    public dropdownItems = dropdownItems;

    constructor(private appShellService: AppShellService){}

    public ngOnInit(): void {
        this.appShellService.setNavIcon('sbs');
    }

    public trackByFn(_: number, {title}: ITask): string {
        return title;
    }
}
