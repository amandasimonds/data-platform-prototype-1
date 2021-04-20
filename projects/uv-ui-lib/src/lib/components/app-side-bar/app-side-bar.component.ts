import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lib-app-side-bar',
  templateUrl: './app-side-bar.component.html',
  styleUrls: ['../../scss/_styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSideBarComponent {

  @Input() public titleText: string;
  @Input() public descriptionText: string;
  @Input() public tabs: GwuTab;

}

interface GwuTab{
  icon: string;
  link: string;
  linkText: string;
}
