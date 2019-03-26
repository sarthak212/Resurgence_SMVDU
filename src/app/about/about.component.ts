import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { routeanimationmodule } from '../routeranimation/routeranimation';
import { Router } from '@angular/router';
import { trigger, transition, stagger, style, animate, query } from '@angular/animations';
import { getTranslationForTemplate } from '@angular/core/src/render3/i18n';


export enum KEY_CODE {
  UP_ARROW = 38,
  DOWN_ARROW = 40
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    routeanimationmodule,
    trigger('animateabout',[
      transition('*=>sar',[
        animate(1000,style({
          color: 'red',
          backgroundColor: 'blue' 
        })),
        animate(1000)
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  // @HostBinding('@routeanimate') routeAnimation = true;
  @HostListener('window:keyup', ['$event']) keyeventrecord(event: KeyboardEvent){
    if(event.keyCode == KEY_CODE.DOWN_ARROW){
      this.router.navigate(['event']);
    }
    if(event.keyCode == KEY_CODE.UP_ARROW){
      this.router.navigate(['']);
    }
  }
  @HostListener('DOMMouseScroll',['$event']) mousescrolleventfirefox(event:any){
    this.scrollevent(event);
  }
  @HostListener('mousewheel',['$event']) mousescrolleventchrome(event:any){
    this.scrollevent(event);
  }
  @HostListener('onmousewheel',['$event']) mousescrolleventie(event:any){
    this.scrollevent(event);
  }
  scrollevent(event:any){
    var event = window.event || event; 
    var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    if(delta > 0) {
      if(event.target.className!='innerscroll'){
        this.router.navigate(['']);}
    } else if(delta < 0) 
    {   
        if(event.target.className!='innerscroll'){
          this.router.navigate(['event']);
        }
    }
  }
  aboutlist="Resurgence is the biggest fest conducted in Jammu & Kashmir at Shri Mata Vashino Devi University. More than 3,000 Students participate directly or indirectly in this mega-event. Apart from the socio-cultural events different informal event seminars, workshops, talks, guest lectures increases the aroma of Fest. The Cycle began ten years ago as more of an initiative than an effort to glamorize the potential.".split(' ');
  constructor(private router:Router ) {}
  ngOnInit() {
  }

}
