import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-navbar-dark',
  templateUrl: './navbar-dark.component.html',
  styleUrls: ['./navbar-dark.component.scss']
})
export class NavbarDarkComponent implements OnInit {

  @Input() icon1: string;
  @Input() icon2: string;
  @Input() icon3: string;
  @Input() userPic: string;
  @Input() navLink1: string;
  @Input() navLink2: string;
  @Input() navLink3: string;
  @Input() userLink: string;

  constructor() { }

  ngOnInit(): void {
  }

}
