import { Component, Input, OnInit } from '@angular/core';
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
      navlink: "/start-page/home",
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

  snippetBox = [
    {
      icon: "circle",
      snippetHeading: "Heading",
      snippetTxt: "Snippet will go here on three lines. And is clickable"
    },
    {
      icon: "circle",
      snippetHeading: "Heading",
      snippetTxt: "Snippet will go here on three lines. And is clickable"
    },
    {
      icon: "circle",
      snippetHeading: "Heading",
      snippetTxt: "Snippet will go here on three lines. And is clickable"
    },
    {
      icon: "circle",
      snippetHeading: "Heading",
      snippetTxt: "Snippet will go here on three lines. And is clickable"
    },
    {
      icon: "circle",
      snippetHeading: "Heading",
      snippetTxt: "Snippet will go here on three lines. And is clickable"
    },
    {
      icon: "circle",
      snippetHeading: "Heading",
      snippetTxt: "Snippet will go here on three lines. And is clickable"
    },
    {
      icon: "circle",
      snippetHeading: "Heading",
      snippetTxt: "Snippet will go here on three lines. And is clickable"
    },
    {
      icon: "circle",
      snippetHeading: "Heading",
      snippetTxt: "Snippet will go here on three lines. And is clickable"
    },
    {
      icon: "circle",
      snippetHeading: "Heading",
      snippetTxt: "Snippet will go here on three lines. And is clickable"
    },
    {
      icon: "circle",
      snippetHeading: "Heading",
      snippetTxt: "Snippet will go here on three lines. And is clickable"
    },
    {
      icon: "circle",
      snippetHeading: "Heading",
      snippetTxt: "Snippet will go here on three lines. And is clickable"
    },
    {
      icon: "circle",
      snippetHeading: "Heading",
      snippetTxt: "Snippet will go here on three lines. And is clickable"
    },
    {
      icon: "circle",
      snippetHeading: "Heading",
      snippetTxt: "Snippet will go here on three lines. And is clickable"
    },
    {
      icon: "circle",
      snippetHeading: "Heading",
      snippetTxt: "Snippet will go here on three lines. And is clickable"
    }
  ]

  constructor(private route : Router) {}

  ngOnInit(): void {

  }

  clear(){
    console.log("clear button clicked");
  }

  expandFilters(){
    console.log("expand button clicked");
  }

  moveRight(){
    console.log("move right");
  }

  showFilters(){
    console.log("show filters");
  }

  search(){
    console.log("search something");
  }

  snippetClick(){
    console.log("snippet was clicked");
  }

}
