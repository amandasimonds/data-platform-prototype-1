import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ITask } from '../interfaces/side-by-side.interfaces';

@Component({
  selector: 'lib-uv-ui-task-snippet',
  templateUrl: './task-snippet.component.html',
  styleUrls: ['./task-snippet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskSnippetComponent {

    @Input() public tasks: ITask[];

    constructor(){
        this.tasks = [];
    }

    public trackByTaskTitle(_: number, task: ITask): string {
        return task.title;
    }
}
