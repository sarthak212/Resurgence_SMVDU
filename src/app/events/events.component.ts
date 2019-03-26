import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { routeanimationmodule } from '../routeranimation/routeranimation';
import { Router } from '@angular/router';


export enum KEY_CODE {
  UP_ARROW = 38,
  DOWN_ARROW = 40
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  animations:[
    routeanimationmodule
  ]
})
export class EventsComponent implements OnInit {
  // @HostBinding('@routeanimate') routeAnimation = true;
  @HostListener('window:keyup', ['$event']) keyeventrecord(event: KeyboardEvent){
    if(event.keyCode == KEY_CODE.DOWN_ARROW){
      this.router.navigate(['gallery']);
    }
    if(event.keyCode == KEY_CODE.UP_ARROW){
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
        this.router.navigate(['about']);
    } else if(delta < 0) 
    {
        this.router.navigate(['gallery']);
    }
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
