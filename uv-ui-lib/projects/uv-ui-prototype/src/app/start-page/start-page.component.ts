import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'prototype-uv-ui-start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartPageComponent {

  public snippetBox = [
    {
      icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/circle-gray.svg',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/circle-gray.svg',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/circle-gray.svg',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/circle-gray.svg',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/circle-gray.svg',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/circle-gray.svg',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/circle-gray.svg',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/circle-gray.svg',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/circle-gray.svg',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/circle-gray.svg',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/circle-gray.svg',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/circle-gray.svg',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/circle-gray.svg',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    },
    {
      icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/circle-gray.svg',
      snippetHeading: 'Heading',
      snippetTxt: 'Snippet will go here on three lines. And is clickable'
    }
  ];

  public snippetClick(event: Event): void {
    console.log('snippet was clicked', event);
  }
}
