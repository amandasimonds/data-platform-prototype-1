import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { ITask } from '../interfaces/side-by-side.interfaces';

@Component({
  selector: 'lib-uv-ui-side-by-side-landing',
  templateUrl: './side-by-side-landing.component.html',
  styleUrls: ['../scss/_styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBySideLandingComponent {

  @Input() public tasks: ITask[];
  
  @Output() public readonly addTaskEvent = new EventEmitter<Event>();
  @Output() public readonly switchFilterEvent = new EventEmitter<Event>();

  constructor(){
    this.tasks = [];
  }

  public addTaskClicked($event: Event): void{
    this.addTaskEvent.emit($event);
  }

  public switchFilterClicked($event: Event): void{
    this.switchFilterEvent.emit($event);
  }

  public trackByTaskTitle(_: number, task: ITask): string {
      return task.title
  }
}
