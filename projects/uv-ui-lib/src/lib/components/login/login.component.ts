import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../scss/_styles.scss']
})
export class LoginComponent implements OnInit {

  // @Input() login: () => void;
  @Input() header: string;

  constructor() {

  }

  ngOnInit(): void {
  }

}
