
import { trigger, state, keyframes, style, transition, animate } from '@angular/animations';

export let fade = trigger( 'fade', [
        state('void', style({ opacity: 0, transform: 'translateX(-6px)'})),
        transition(':enter' , [
            animate('0.7s') 
        ]),
])

export let explode = trigger( 'explode', [
    transition(':leave' , [
    animate('0.5s', keyframes([
            style({ transform: 'scale(1.1)', opacity: '1' }),            
            style({ transform: 'scale(1.2)', opacity: '1' }),                                   
            style({ transform: 'scale(0.5)', opacity: '0.5' }),                                   
            style({ transform: 'scale(0)', opacity: '0' })
        ])) 
    ]),
])