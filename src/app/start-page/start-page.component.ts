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
      navlink: "/start-page/home-splash",
      classes: ["", ""],
    },
    {
      icon: "inspect",
      navlink: "/start-page/global-where-used",
      classes: ["", ""]
    },

    {
      icon: "sideBySide",
      navlink: "/start-page/side-by-side",
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

  clear(event){
    console.log("clear button clicked", event);
  }

  expandFilters(event){
    console.log("expand button clicked", event);
  }

  moveRight(event){
    console.log("move right", event);
  }

  showFilters(event){
    console.log("show filters", event);
  }

  search(event){
    console.log("search something", event);
  }

  snippetClick(event){
    console.log("snippet was clicked", event);
  }

  profileClick(event){
  console.log("profile was clicked", event);
  }

  helpBtnClick(event){
    console.log("help button was clicked", event);
  }

}
