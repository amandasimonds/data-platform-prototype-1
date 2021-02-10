import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  nav = [
    {
      icon: "dashboard",
      navlink: "/start-page",
      classes: ["", ""],
    },
    {
      icon: "inspect",
      navlink: "/start-page",
      classes: ["", ""]
    },

    {
      icon: "sideBySide",
      navlink: "/start-page",
      classes: ["", ""]
    },
    {
      icon: "designRipple",
      navlink: "/start-page",
      classes: ["", ""]
    },
    {
      icon: "ingestion",
      navlink: "/start-page",
      classes: ["", ""]
    },
    {
      icon: "settings",
      navlink: "/start-page",
      classes: ["", ""]
    },

  ]

  constructor(private route : Router) {}

  ngOnInit(): void {

  }

  btnFunctionCall(){
    this.route.navigate(["/data-clustering"])
  }

}
