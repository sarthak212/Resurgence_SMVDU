import { trigger, style, animate, transition } from '@angular/animations';


export const routeanimationmodule = trigger('routeanimate',[
    transition(':enter', [
        animate(200,style({
        opacity:0,
        filter: 'blur(40px)'
    })),animate(200)]),
    transition(':leave',animate(400,style({
        opacity:0,
        filter: 'blur(40px)'
    }))
    )
]);