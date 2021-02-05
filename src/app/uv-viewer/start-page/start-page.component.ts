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
      navlink: "/data-clustering",
      classes: ["", ""],
    },
    {
      icon: "inspect",
      navlink: "/login",
      classes: ["", ""]
    },
    {
      icon: "clouds",
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
