import { ChangeDetectionStrategy, Component } from '@angular/core';
import {compareTasksData} from './compareTasks';

@Component({
  selector: 'lib-uv-ui-side-by-side',
  templateUrl: './side-by-side.component.html',
  styleUrls: ['./side-by-side.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBySideComponent {
  public loadTask = true;
  public compareTasks = compareTasksData;
}
