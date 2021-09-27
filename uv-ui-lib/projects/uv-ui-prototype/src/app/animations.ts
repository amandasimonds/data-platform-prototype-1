import { trigger, state, style, transition, animate } from '@angular/animations';

export const slideInOutAnimation = [
    trigger('slideInOut', [

        state('visible', style({
            transform: 'translateX(0)'
        })),

        state('hidden', style({
            transform: 'translateX(-500px)'
        })),

        transition('hidden <=> visible', animate(300))
    ])
];
