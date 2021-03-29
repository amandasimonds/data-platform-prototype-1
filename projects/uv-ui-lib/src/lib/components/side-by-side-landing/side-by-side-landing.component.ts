import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'lib-side-by-side-landing',
  templateUrl: './side-by-side-landing.component.html',
  styleUrls: ['../../scss/_styles.scss']
})
export class SideBySideLandingComponent {

  @Input() public tasks: Task[] = [{started: '', link: '', title: '', description: '', date: ''}];

  @Output() public readonly addTaskEvent = new EventEmitter<Event>();
  @Output() public readonly switchFilterEvent = new EventEmitter<Event>();

  public addTaskClicked($event: Event): void{
    this.addTaskEvent.emit($event);
  }

  public switchFilterClicked($event: Event): void{
    this.switchFilterEvent.emit($event);
  }
}

interface Task{
  started: string;
  link: string;
  title: string;
  description: string;
  date: string;
}
