import { Component, Input} from '@angular/core';

@Component({
  selector: 'lib-side-by-side-landing',
  templateUrl: './side-by-side-landing.component.html',
  styleUrls: ['../../scss/_styles.scss']
})
export class SideBySideLandingComponent {

  @Input() loadTask : any;
  @Input() tasks : Task
  @Input() addTaskClicked : any
  @Input() switchFilterClicked : any

  constructor() { }

}

interface Task{
  started: string;
  link: string;
  title: string;
  description: string;
  date: string;
}
