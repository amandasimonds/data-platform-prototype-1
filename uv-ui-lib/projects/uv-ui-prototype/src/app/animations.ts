import { trigger, state, style, transition, animate, query, stagger, animateChild } from '@angular/animations';

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

export const flyInOutAnimation = [
    trigger('flyInOut', [

        state('in', style({
            transform: 'translateX(2000px)',
            opacity: '1'
        })),

        state('back', style({
            transform: 'translateX(0px)',
            opacity: '1'
        })),

        state('next', style({
            transform: 'translateX(-2000px)',
            opacity: '1'
        })),

        transition('* <=> *', animate(500))
    ])
];

export const nextPageAnimation = [
    trigger('nextPage', [

        state('in', style({
            transform: 'translateX(2000px)',
            opacity: '1'
        })),

        state('back', style({
            transform: 'translateX(0px)',
            opacity: '1'
        })),

        state('next', style({
            transform: 'translateX(-2000px)',
            opacity: '1'
        })),

        transition('* <=> *', animate(500))
    ])
];

export const Container = [
	trigger('container', [
		transition(':enter, :leave', [
			query('@*', animateChild()),
		]),
	]),
];

export const EnterExitLeft = [
    trigger('enterExitLeft', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translateX(-2000px)' }),
            animate(
                '1000ms ease-in',
                style({ opacity: 1, transform: 'translateX(0)' })
            ),
    	]),
	    transition(':leave', [
            animate(
                '1000ms ease-in',
                style({ opacity: 0, transform: 'translateX(-2000px)' })
            ),
	    ]),
    ]),
];
export const EnterExitRight = [
    trigger('enterExitRight', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translateX(2000px)' }),
            animate(
                '1000ms ease-in',
                style({ opacity: 1, transform: 'translateX(100px)' })
            ),
        ]),
        transition(':leave', [
            animate(
                '1000ms ease-in',
                style({ opacity: 0, transform: 'translateX(-2000px)' })
	        ),
        ]),
	]),
];
