import { Component, Input } from '@angular/core';
import { launchBarAnimation } from '../animations';

@Component({
  selector: 'uvx-launch-bar',
  templateUrl: './launch-bar.component.html',
  styleUrls: ['./launch-bar.component.scss'],
  animations: [launchBarAnimation]
})
export class LaunchBarComponent {

  @Input() topPos = '';
  @Input() rightPos = '';
  @Input() launchServices: any[] = [];

}
