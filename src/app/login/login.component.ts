import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {

  }

  textBtnConfig = {
    styles: {},
    text: "Login"
  }

  iconBtnConfig = {
    styles: {},
    iconName: "inspect"
  }

  btnFunctionCall(event) {
    console.log('function was called', event);
    this.route.navigate(["/start-page"])
  }
}
