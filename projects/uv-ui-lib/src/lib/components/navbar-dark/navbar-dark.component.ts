import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-navbar-dark',
  templateUrl: './navbar-dark.component.html',
  styleUrls: ['../../scss/_styles.scss']
})
export class NavbarDarkComponent implements OnInit {

  @Input() navlinks: [Nav];

  @Input() userPic: string;
  @Input() userLink: string;

  constructor() { }

  ngOnInit(): void {
  }

}

interface Nav{
  icon: string;
  navlink: string;
  classes: [string];
}
