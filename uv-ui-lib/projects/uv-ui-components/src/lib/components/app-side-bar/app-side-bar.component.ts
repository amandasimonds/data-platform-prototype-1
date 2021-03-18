import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-app-side-bar',
  templateUrl: './app-side-bar.component.html',
  styleUrls: ['../../scss/_styles.scss']
})
export class AppSideBarComponent implements OnInit {

  @Input() titleText : string;
  @Input() descriptionText : string;
  @Input() tabs : GwuTab;

  constructor() { }

  ngOnInit(): void {
  }

}

interface GwuTab{
  icon: string;
  link: string;
  linkText: string;
}
