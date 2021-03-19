import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lib-uv-ui-login',
  templateUrl: './login.component.html',
  styleUrls: ['../scss/_styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
    @Input() public header = '';
}
