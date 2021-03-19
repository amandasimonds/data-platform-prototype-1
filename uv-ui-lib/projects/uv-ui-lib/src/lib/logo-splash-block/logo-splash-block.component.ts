import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lib-uv-ui-logo-splash-block',
  templateUrl: './logo-splash-block.component.html',
  styleUrls: ['../scss/_styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoSplashBlockComponent {

  @Input() public headingText = '';
  @Input() public blurbText = '';

}
