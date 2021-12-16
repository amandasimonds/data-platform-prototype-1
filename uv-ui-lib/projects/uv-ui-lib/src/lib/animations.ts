import { trigger, state, style, transition, animate } from '@angular/animations';

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
