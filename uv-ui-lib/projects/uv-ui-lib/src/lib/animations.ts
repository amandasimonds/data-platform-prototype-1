import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';

export const slideInOutAnimation = [
    trigger('slideInOut', [

        state('visible', style({
            transform: 'translateX(0)'
        })),

        state('hidden', style({
            transform: 'translateX(-500px)'
        })),

        state('navbar-peek', style({
            transform: 'translateX(-210px)'
        })),

        transition('* <=> visible', animate(300))
    ]),
];

export const fadeInOutAnimation = [
    trigger('fadeInOut', [

        state('visible', style({
            opacity: '1'
        })),

        state('hidden', style({
            opacity: '0'
        })),

        transition('hidden <=> visible', animate(200))
    ]),
];

export const launchBarAnimation = [
    trigger('launchBarAnimation', [
        transition(':enter', [   // :enter is alias to 'void => *'
            style({ opacity: 0 }),
            animate('.2s .75s', style({ opacity: 1 }))
        ]),
        transition(':leave', [   // :leave is alias to '* => void'
            style({ opacity: 1 }),
            animate('.5s', style({ opacity: 0 }))
        ])
    ]),
];
