import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-uv-ui-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['../scss/_styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetComponent {

}
