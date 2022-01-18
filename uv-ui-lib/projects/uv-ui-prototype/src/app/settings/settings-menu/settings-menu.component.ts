import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { connectorCreatorSteps } from '../connector-creator/connector-creator-steps';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss']
})
export class SettingsMenuComponent implements OnInit {

  public settingsMenuIsExpanded = true;
  public connectorCreatorSteps = connectorCreatorSteps;

  @ViewChild('section') div:ElementRef;

  // public getYPos(el: string): number {
  //   console.log(el, this.elRef.nativeElement.querySelector(`#${el}`).offsetTop);
  //   return this.elRef.nativeElement.querySelector(el).offsetTop;
  // }

  constructor(private elRef:ElementRef) { }

  ngOnInit(): void {
    // console.log(this.div.nativeElement.style.offsetTop);
  }

  public toggleSettingsMenu() {
      this.settingsMenuIsExpanded = !this.settingsMenuIsExpanded;
  }

  ngAfterViewChecked(): void {
    console.log('menu', this.connectorCreatorSteps);
  }
}
