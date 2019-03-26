import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { routeanimationmodule } from '../routeranimation/routeranimation';
import { Router } from '@angular/router';


export enum KEY_CODE {
  UP_ARROW = 38,
  DOWN_ARROW = 40
}
@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  // @HostBinding('@routeanimate') routeAnimation = true;
  @HostListener('window:keyup', ['$event']) keyeventrecord(event: KeyboardEvent){
    if(event.keyCode == KEY_CODE.DOWN_ARROW){
      this.router.navigate(['']);
    }
    if(event.keyCode == KEY_CODE.UP_ARROW){
      this.router.navigate(['gallery']);
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
        this.router.navigate(['gallery']);
    } else if(delta < 0) 
    {
        this.router.navigate(['front']);
    }
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
