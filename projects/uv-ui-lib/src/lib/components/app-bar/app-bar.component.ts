import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['../../scss/_styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppBarComponent {

}
