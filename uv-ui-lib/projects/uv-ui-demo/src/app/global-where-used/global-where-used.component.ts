import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
// eslint-disable-next-line
  selector: 'app-global-where-used',
  templateUrl: './global-where-used.component.html',
  styleUrls: ['./global-where-used.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalWhereUsedComponent {

  public gwuTabs = [
    {
      icon: 'moreHorizontal',
      link: '/',
      linkText: 'Link'
    },
    {
      icon: 'moreHorizontal',
      link: '/',
      linkText: 'Link'
    },
    {
      icon: 'moreHorizontal',
      link: '/',
      linkText: 'Link'
    }
  ];

}
