import { trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [

        state('in', style({
           'left': 'var(--uv-navbar-width)'
        })),

        state('out', style({
            'left': '-500px'
        })),

        transition('in => out', [
            animate('1s')
        ]),

        transition('out => in', [
            animate('1s')
        ]),
    ]),
]
