import { Component, OnInit, HostListener } from '@angular/core';
import { routeanimationmodule } from '../routeranimation/routeranimation';
import { AnimationBuilder,style, animate } from '@angular/animations';
import { Router } from '@angular/router';


export enum KEY_CODE {
  UP_ARROW = 38,
  DOWN_ARROW = 40
}

export class MyModule {}

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
  list=[0,1,2,3,4,5,6,7,8,9];
  count:any = 0;
  translate:any = 0;
  number1=0;
  number2=0;

  
  moveImage1(element:HTMLElement) {
      var widthwindow=270;
      if( window.innerWidth < 350) {
        widthwindow=145;
      }
      if(this.number1<3){
        this.number1=this.number1+1;
        var translate1 =  this.number1*widthwindow ;
        console.log(this.number1,translate1);
    const animations = this.builder.build([
      animate(300,style({
        transform:'translateX(-'+translate1+'px)',
      })),
    ]);

    const imagePlay = animations.create(element);
    imagePlay.play();
  }
  else{
    this.overflowright(element);
  }
}
moveImage2(element:HTMLElement){
  var widthwindow=270;
  if( window.innerWidth < 350) {
    widthwindow=145;
  }
    if(this.number2<3){
      this.number2=this.number2+1;
      var translate1 =  this.number2*widthwindow ;
      console.log(this.number2,translate1);
  const animations = this.builder.build([
    animate(300,style({
      transform:'translateX(-'+translate1+'px)',
    })),
  ]);

  const imagePlay = animations.create(element);
  imagePlay.play();
}
else{
  this.overflowright(element);
}
}
moveImage3(element:HTMLElement){
  var widthwindow=270;
  if( window.innerWidth < 350) {
    widthwindow=145;
  }
  if(this.number1>0){
    this.number1=this.number1-1;
    var translate1 =  this.number1*widthwindow ;
    console.log(this.number1,translate1);
const animations = this.builder.build([
  animate(300,style({
    transform:'translateX(-'+translate1+'px)',
  })),
]);

const imagePlay = animations.create(element);
imagePlay.play();
}
else{
  this.overflowleft(element);
}
}
moveImage4(element:HTMLElement){
  var widthwindow=270;
  if( window.innerWidth < 350) {
    widthwindow=145;
  }
  if(this.number2>0){
    this.number2=this.number2-1;
    var translate1 =  this.number2*widthwindow ;
    console.log(this.number2,translate1);
const animations = this.builder.build([
  animate(300,style({
    transform:'translateX(-'+translate1+'px)',
  })),
]);

const imagePlay = animations.create(element);
imagePlay.play();
}
else{
  this.overflowleft(element);
}
}
overflowleft(element: HTMLElement){
  const anm=this.builder.build([
    animate(200,style({
      transform: 'translateX(15px)'
    })),
    animate(200,style({
      transform: 'translateX(0px)'
    }))
  ])
  var play3=anm.create(element);
  play3.play();
}
overflowright(element: HTMLElement){
  var left=825;
  var right=810;
  if(window.innerWidth < 350){
    left=450;
    right=435;
  }
  const anm=this.builder.build([
    animate(200,style({
      transform: 'translateX(-'+left+'px)'
    })),
    animate(200,style({
      transform: 'translateX(-'+right+'px)'
    }))
  ])
  var play3=anm.create(element);
  play3.play();
}
  constructor(private router: Router,private builder: AnimationBuilder) {
   }

  ngOnInit() {
  }

}
