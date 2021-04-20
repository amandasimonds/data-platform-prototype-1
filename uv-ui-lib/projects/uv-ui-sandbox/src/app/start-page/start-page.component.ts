import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sandbox-uv-ui-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartPageComponent {

  public nav = [
    {
      icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/apps-quad.svg',
      navlink: '/start-page/home-splash',
      classes: []
    },
    {
      icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/apps-gwu.svg',
      navlink: '/start-page/global-where-used',
      classes: []
    },

    {
      icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/apps-sbs.svg',
      navlink: '/start-page/side-by-side',
      classes: []
    },
    {
      icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/apps-design-ripple.svg',
      navlink: '/start-page',
      classes: []
    },
    {
      icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/apps-ingestion.svg',
      navlink: '/start-page',
      classes: []
    },
    {
      icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/apps-settings.svg',
      navlink: '/start-page',
      classes: []
    }
  ];

  public snippetBox = [
    {
      icon: 'circle',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'circle',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'circle',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'circle',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'circle',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'circle',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'circle',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'circle',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'circle',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'circle',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'circle',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'circle',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'circle',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'circle',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    }
  ];

  constructor(private route: Router) {}

  public clear(event: Event): void{
    console.log('clear button clicked', event);
  }

  public expandFilters(event: Event): void {
    console.log('expand button clicked', event);
  }

  public moveRight(event: Event): void {
    console.log('move right', event);
  }

  public showFilters(event: Event): void {
    console.log('show filters', event);
  }

  public search(event: Event): void {
    console.log('search something', event);
  }

  public snippetClick(event: Event): void {
    console.log('snippet was clicked', event);
  }

  public profileClick(event: Event): void {
  console.log('profile was clicked', event);
  }

  public helpBtnClick(event: Event): void {
    console.log('help button was clicked', event);
  }

}
