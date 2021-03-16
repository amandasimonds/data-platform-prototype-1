import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-where-used',
  templateUrl: './global-where-used.component.html',
  styleUrls: ['./global-where-used.component.scss']
})
export class GlobalWhereUsedComponent implements OnInit {

  gwuTabs = [
    {
      icon: "moreHorizontal",
      link: "/",
      linkText: "Link"
    },
    {
      icon: "moreHorizontal",
      link: "/",
      linkText: "Link"
    },
    {
      icon: "moreHorizontal",
      link: "/",
      linkText: "Link"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
