import { ChangeDetectionStrategy, Component } from '@angular/core';
import { slideInOutRightAnimation } from '../../../shared/animations';

@Component({
  selector: 'app-helper-bar',
  templateUrl: './helper-bar.component.html',
  styleUrls: ['./helper-bar.component.scss'],
  animations: [slideInOutRightAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelperBarComponent {

    public helperBarState = 'visible';

   public toggleHelperBar() {
    this.helperBarState === 'hidden' ? this.helperBarState = 'visible' : this.helperBarState = 'hidden';
   }
}
