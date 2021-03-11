import { Component, Input} from '@angular/core';

@Component({
  selector: 'lib-side-by-side-landing',
  templateUrl: './side-by-side-landing.component.html',
  styleUrls: ['../../scss/_styles.scss']
})
export class SideBySideLandingComponent {

  @Input() tasks : Task

  constructor() { }

}

interface Task{
  started: boolean;
  link: string;
  title: string;
  description: string;
  date: string;
}
