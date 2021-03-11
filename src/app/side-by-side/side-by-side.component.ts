import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-by-side',
  templateUrl: './side-by-side.component.html',
  styleUrls: ['./side-by-side.component.scss']
})
export class SideBySideComponent implements OnInit {

  compareTasks = [
    {
      started: true,
      link: "",
      title: "Gasket Aluminum Exchangers",
      description: "Lorem ipsum dolor sit amet consectetur ",
      date: "Mar, 02",
    },

    {
      started: true,
      link: "",
      title: "Gasket Aluminum Exchangers",
      description: "Lorem ipsum dolor sit amet consectetur ",
      date: "Mar, 02",
    },

    {
      started: true,
      link: "",
      title: "Gasket Aluminum Exchangers",
      description: "Lorem ipsum dolor sit amet consectetur ",
      date: "Mar, 02",
    },

    {
      started: true,
      link: "",
      title: "Gasket Aluminum Exchangers",
      description: "Lorem ipsum dolor sit amet consectetur ",
      date: "Mar, 02",
    },

    {
      started: true,
      link: "",
      title: "Gasket Aluminum Exchangers",
      description: "Lorem ipsum dolor sit amet consectetur ",
      date: "Mar, 02",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
