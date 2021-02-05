import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { iconPngs } from './icon-pngs';

@Component({
  selector: 'lib-icons-png',
  template: '<img src={{iconPng}}>',
  styleUrls: ['../../scss/_styles.scss']
})
export class IconPngsComponent implements OnInit {

  @Input() iconPng : string

  constructor() { }

  ngOnInit(): void {
  }


}
