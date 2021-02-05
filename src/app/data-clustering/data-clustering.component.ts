import { Component } from '@angular/core';

@Component({
  selector: 'app-data-clustering',
  templateUrl: './data-clustering.component.html',
  styleUrls: ['./data-clustering.component.scss']
})

export class DataClusteringComponent {

  nav = [
    {
      icon: "clouds",
      navlink: "/login",
      classes: ["", ""],
      disabled: true,
      primary: true
    },
    {
      icon: "fileCancel",
      navlink: "/start-page",
      classes: ["", ""]
    },
    {
      icon: "../../assets/images/search-icon.png",
      navlink: "/start-page",
      classes: ["", ""]
    }
  ]
}
