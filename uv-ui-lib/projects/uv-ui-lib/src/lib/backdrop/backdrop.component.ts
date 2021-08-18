import { Component, OnInit } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

@Component({
    selector: 'uvx-backdrop',
    templateUrl: './backdrop.component.html',
    styleUrls: ['./backdrop.component.scss'],
    animations: [
        trigger('fadeIn', [
            // state('visible', style({
            //     opacity: 1,
            // })),
            // state('hidden', style({
            //     opacity: 0,
            // })),
            // transition('hidden => visible', [
            //     animate('2s')
            // ]),

            transition('void => *', [
                style({ opacity: 0 }), 
                animate(200, style({opacity: 1}))
              ]), 

            // transition(':enter',
            // animate(600, style({opacity: 1}))),

            // transition(':leave',
            // animate(600, style({opacity: 0}))),

        ]),

        trigger('fadeOut', [
            transition('void => *', [
                style({ opacity: 1 }), 
                animate(200, style({opacity: 0}))
              ]), 
        ])
    ]
})
export class BackdropComponent implements OnInit {

    isVisible = true;

    toggle() {
      this.isVisible = !this.isVisible;
      console.log(this.isVisible);
    }

  constructor() { }

  ngOnInit(): void {
    console.log(this.isVisible);
      this.isVisible = true;
      console.log(this.isVisible);
  }

  ngOnDestroy(): void {
    console.log(this.isVisible);
    this.isVisible = false;
    console.log(this.isVisible);
  }

}
