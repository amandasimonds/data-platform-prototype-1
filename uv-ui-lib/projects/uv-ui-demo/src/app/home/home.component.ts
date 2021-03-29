import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-uv-ui-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
}
