import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
// eslint-disable-next-line
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
}
