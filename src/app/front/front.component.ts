import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { routeanimationmodule } from '../routeranimation/routeranimation';
import { Router } from '@angular/router';
import { AnimationBuilder, style, animate } from '@angular/animations';


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
        this.router.navigate(['']);
    }
  }
  teamlist=[{
    id:1,
    name: 'Hashirama',
    src: '../assets/images/dummyimage/index.jpeg',
    teampart: 'Developer1'
  },
{
  id:2,
  name: 'Naruto',
  src: '../assets/images/dummyimage/index3.jpeg',
  teampart: 'Developer2'
},
{
  id:3,
  name: 'Sasuke',
  src: '../assets/images/dummyimage/index2.jpeg',
  teampart: 'Developer3'
},
{
  id:4,
  name: 'Hinata',
  src: '../assets/images/dummyimage/index3.jpeg',
  teampart: 'Developer4'
},
{
  id: 5,
  name: 'Minato',
  src: '../assets/images/dummyimage/index4.jpeg',
  teampart: 'Developer5'
},
{
  id: 6,
  name: 'Kakashi',
  src: '../assets/images/dummyimage/index5.jpeg',
  teampart: 'Developer6'
},
{
  id: 7,
  name: 'Itachi',
  src: '../assets/images/dummyimage/index5.jpeg',
  teampart: 'Developer7'
}];
teamlist1=[{
  id:1,
  name:'Hashirama',
  src: '../assets/images/dummyimage/index.jpeg',
  teampart: 'Developer1'
},
{
id:2,
name: 'Naruto',
src: '../assets/images/dummyimage/index3.jpeg',
teampart: 'Developer2'
},
{
id:3,
name: 'Sasuke',
src: '../assets/images/dummyimage/index2.jpeg',
teampart: 'Developer3'
},
{
id:4,
name: 'Minato',
src: '../assets/images/dummyimage/index3.jpeg',
teampart: 'Developer4'
},
{
id: 5,
name: 'Kakashi',
src: '../assets/images/dummyimage/index4.jpeg',
teampart: 'Developer5'
},
{
id: 6,
name: 'Itachi',
src: '../assets/images/dummyimage/index5.jpeg',
teampart: 'Developer6'
},
{
id: 7,
name: 'Hinata',
src: '../assets/images/dummyimage/index5.jpeg',
teampart: 'Developer7'
}];
leftshift=0;
shiftleft(upper: HTMLElement, lower: HTMLElement){
  var shiftvar=14.27;
  var shiftupper=14.27;
  var k=3;
  if( window.innerWidth <350){
    shiftvar=52.6;
    shiftupper=14.27;
    k=6;
  }
  if(this.leftshift<k){
  this.leftshift=this.leftshift+1;
  const anim=this.builder.build([
    animate(400,style({
      transform: 'translateX(-'+this.leftshift*shiftupper+'%)'
    }))
  ])
  const anim1=this.builder.build([
    animate(400,style({
      transform: 'translateX(-'+this.leftshift*shiftvar+'%)'
    }))
  ])
  var play1=anim.create(upper);
  var play2=anim1.create(lower);
  play1.play();
  play2.play();
}else{
  this.overflowright(upper,lower);
}
}
shiftright(upper: HTMLElement, lower: HTMLElement){
  var shiftvar=14.27;
  var shiftupper=14.27;
  if( window.innerWidth < 350){
    shiftvar=52.6;
  }
  if(this.leftshift>0){
  this.leftshift=this.leftshift-1;
  const anim=this.builder.build([
    animate(400,style({
      transform: 'translateX(-'+this.leftshift*shiftupper+'%)'
    }))
  ])
  const anim1=this.builder.build([
    animate(400,style({
      transform: 'translateX(-'+this.leftshift*shiftvar+'%)'
    }))
  ])
  var play1=anim.create(upper);
  var play2=anim1.create(lower);
  play1.play();
  play2.play();
}
else{
  this.overflowleft(upper,lower);
}
}
overflowleft(upper: HTMLElement,lower: HTMLElement){
  const anim=this.builder.build([
    animate(400,style({
      transform: 'translateX(10px)'
    })),style({
      transform: 'translate(0px)'
    })
  ])
  const anim1=this.builder.build([
    animate(400,style({
      transform: 'translateX(10px)'
    })),style({
      transform: 'translate(0px)'
    })
  ])
  var play1=anim.create(upper);
  var play2=anim1.create(lower);
  play1.play();
  play2.play();
}
overflowright(upper: HTMLElement,lower: HTMLElement){
  var shiftvarleft=42.81;
  var shiftvarright=43.4;
  var shiftupperleft=85.62;
  var shiftupperright=86.2;
  if( window.innerWidth < 350){
    shiftvarleft=315.6;
    shiftvarright=316.2;
  }
  const anim=this.builder.build([
    animate(400,style({
      transform: 'translateX(-'+shiftupperright+'%)'
    })),style({
      transform: 'translate(-'+shiftupperleft+'%)'
    })
  ])
  const anim1=this.builder.build([
    animate(400,style({
      transform: 'translateX(-'+shiftvarright+'%)'
    })),style({
      transform: 'translate(-'+shiftvarleft+'%)'
    })
  ])
  var play1=anim.create(upper);
  var play2=anim1.create(lower);
  play1.play();
  play2.play();
}
  constructor(private router: Router, private builder: AnimationBuilder) { }

  ngOnInit() {
  }

}
