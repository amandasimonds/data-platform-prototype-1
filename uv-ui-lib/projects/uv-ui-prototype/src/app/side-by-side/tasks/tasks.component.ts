import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ITask } from 'dist/uv-ui-lib/lib/interfaces/side-by-side.interfaces';
import { compareTasksData } from '../compareTasks';
import { dropdownItems } from '../dropdownItems';

@Component({
  selector: 'uv-prototype-sbs-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent implements OnInit {

    public loadTask = true;
    public tasks = compareTasksData;
    public dropdownItems = dropdownItems;

    constructor() {}

    public trackByFn(_: number, {title}: ITask): string {
        return title;
    }

  ngOnInit(): void {
  }

}
