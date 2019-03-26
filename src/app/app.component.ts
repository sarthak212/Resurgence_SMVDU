import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, query, style, animate, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger('routeroutlet',[
           transition('*=>*',[
             group([query(':enter',[
               style({
                 opacity:0,
                 filter: 'blur(40px)'
               }),animate('500ms cubic-bezier(.17,.67,.11,1.02)')
             ],{ optional: true }),
             query(':leave',[
               animate(300,style({
                 opacity:0,
                 filter: 'blur(40px)'
               }))
             ],{
               optional: true
             })])
           ])
  ])]
})
export class AppComponent {

  navigationbar:boolean=false;
  getAnimationdata(router: RouterOutlet){
    const pagedata= router.activatedRouteData['animation'];
    if(!pagedata){
      return 'homepage';
    }
    return pagedata['page'];

  }
}
