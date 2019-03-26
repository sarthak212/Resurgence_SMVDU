import { Component, OnInit, HostBinding, HostListener, ElementRef } from '@angular/core';
import { routeanimationmodule } from '../routeranimation/routeranimation';
import { LoadedRouterConfig } from '@angular/router/src/config';
import { Router , ActivatedRoute } from '@angular/router';
import { containsElement } from '@angular/animations/browser/src/render/shared';
import { trigger, transition, state, style, stagger } from '@angular/animations';

export enum KEY_CODE {
  UP_ARROW = 38,
  DOWN_ARROW = 40
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    routeanimationmodule
  ]
})
export class HomeComponent implements OnInit {
  // @HostBinding('@routeanimate') routeAnimation = true;
  @HostListener('window:keyup', ['$event']) keyeventrecord(event: KeyboardEvent){
    if(event.keyCode == KEY_CODE.DOWN_ARROW){
      this.router.navigate(['about']);
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
        this.router.navigate(['']);
    } else if(delta < 0) 
    {
        this.router.navigate(['about']);
    }
  }
  imagelist=[{
    image:'../assets/images/dummyimage/index.jpeg'
  },{ image: '../assets/images/dummyimage/index1.jpeg'},
{ image: '../assets/images/dummyimage/index2.jpeg'},
{ image: '../assets/images/dummyimage/index3.jpeg'},
{
  image: '../assets/images/dummyimage/index4.jpeg'
},
{
  image: '../assets/images/dummyimage/index5.jpeg'
},
{
  image: '../assets/images/dummyimage/index6.jpeg'
}]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
