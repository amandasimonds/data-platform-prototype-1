import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
// eslint-disable-next-line
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
