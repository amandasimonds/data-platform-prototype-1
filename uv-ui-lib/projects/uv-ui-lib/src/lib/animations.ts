import { trigger, state, style, transition, animate } from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [

        state('visible', style({
            transform: 'translateX(0)'
        })),

        state('hidden', style({
            transform: 'translateX(-500px)'
        })),

        transition('hidden <=> visible', animate(200)),
    ]),
]

export const FadeInOutAnimation = [
    trigger('fadeInOut', [

        state('visible', style({
            opacity: '1'
        })),

        state('hidden', style({
            opacity: '0'
        })),

        transition('hidden <=> visible', animate(200)),
    ]),
]
