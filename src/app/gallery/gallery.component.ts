import { Component, OnInit, HostBinding, HostListener, ElementRef } from '@angular/core';
import { routeanimationmodule } from '../routeranimation/routeranimation';
import { animation, AnimationBuilder, style, animate, AnimationPlayer } from '@angular/animations';
import { Router } from '@angular/router';
import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { $ } from 'protractor';
import { Transform } from 'stream';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

export enum KEY_CODE {
  UP_ARROW = 38,
  DOWN_ARROW = 40
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations: [
    routeanimationmodule
  ]
})
export class GalleryComponent implements OnInit {
  // @HostBinding('@routeanimate') routeAnimation= true;
  @HostListener('window:keyup', ['$event']) keyeventrecord(event: KeyboardEvent){
    if(event.keyCode == KEY_CODE.DOWN_ARROW){
      this.router.navigate(['front']);
    }
    if(event.keyCode == KEY_CODE.UP_ARROW){
      this.router.navigate(['event']);
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
        this.router.navigate(['event']);
    } else if(delta < 0) 
    {
        this.router.navigate(['front']);
    }
  }
  public player: AnimationPlayer;
  listphoto=[{
    id:1,
    src:'../assets/images/resurgencephotos/DSC_0069.JPG'
  },{
    id:2,
    src:'../assets/images/resurgencephotos/DSC_0098.JPG'
  },{
    id:3,
    src:'../assets/images/resurgencephotos/DSC_0369.JPG'
  },
  {
    id:4,
    src:'../assets/images/resurgencephotos/DSC_0069.JPG'
  }
]
listphotos=[{
  id:1,
  src:'../assets/images/resurgencephotos/DSC_0069.JPG'
},{
  id:2,
  src:'../assets/images/resurgencephotos/DSC_0098.JPG'
},{
  id:3,
  src:'../assets/images/resurgencephotos/DSC_0369.JPG'
},
{
  id:4,
  src:'../assets/images/resurgencephotos/DSC_0069.JPG'
}
]
k=false;
leftsrc="../assets/images/icons/left-arrow.png";
rightsrc="../assets/images/icons/rightarrow.png";
getxy(event: MouseEvent,number1:number){
   this.k=false;
   var xcoordinate=event.pageX-number1;
   var ycoordinate=event.pageY-162;
   var height=event.srcElement.clientHeight;
   var width=event.srcElement.clientWidth;
   var x=height/2-xcoordinate;
   var y=width/2-ycoordinate;
   var rotatex=(((x*2)/height)*5) + 'deg';
   var rotatey=(((y*2)/width)*5) + 'deg';
   console.log(event.pageX,event.pageY);
   var wid='rotateX('+rotatex+') rotateY('+rotatey+')';
   const animationforgallery= this.builder.build([
     animate(300,style({
        transform: wid
     }))
    ])
   this.player=animationforgallery.create(event.srcElement,{});
   this.player.play();
}
changek(event: MouseEvent){
  const changeposition= this.builder.build([
    animate(200,style({
      transform: 'rotateX(0deg) rotateY(0deg)'
    }))
  ]);
  var changeplay=changeposition.create(event.srcElement);
  changeplay.play();
}
count:number=0;
up(element1: HTMLElement,element2: HTMLElement){
  if(this.count<3){
  this.translateup1(element1);
  this.translatedown2(element2);
  }
  else{
    this.overflowup1(element1);
    this.overflowdown2(element2);
  }
}
overflowup1(element: HTMLElement){
  const anim=this.builder.build([
    animate(200,style({
      transform: 'translateY(-217vh)'
    })),animate(200,style({
      transform: 'translateY(-213vh)'
    }))
  ])
  const play2=anim.create(element);
  play2.play();
}
overflowdown2(element: HTMLElement){
  const anim=this.builder.build([
    animate(200,style({
      transform: 'translateY(4vh)'
    })),animate(200,style({
      transform: 'translateY(0vh)'
    }))
  ])
  const play2=anim.create(element);
  play2.play();
}
down(element1: HTMLElement,element2: HTMLElement){
  if(this.count>0){
  this.translatedown1(element1);
  this.translateup2(element2);
  }
  else{
    this.overflowdown1(element1);
    this.overflowup2(element2);
  }
}
overflowdown1(element: HTMLElement){
  const anim=this.builder.build([
    animate(200,style({
      transform: 'translateY(4vh)'
    })),animate(200,style({
      transform: 'translateY(0vh)'
    }))
  ])
  const play2=anim.create(element);
  play2.play();
}
overflowup2(element: HTMLElement){
  const anim=this.builder.build([
    animate(200,style({
      transform: 'translateY(-217vh)'
    })),animate(200,style({
      transform: 'translateY(-213vh)'
    }))
  ])
  const play2=anim.create(element);
  play2.play();
}
translateup1(element: HTMLElement){
  this.count=this.count+1;
  var translate=this.count*71;
  const animateup=this.builder.build([
    animate(400, style({
      transform: 'translateY(-'+translate+'vh)'
    }))
  ]);
  var play1=animateup.create(element);
  play1.play();
  element.style.transform='translateY(-'+translate+'vh)';
}
translatedown1(element: HTMLElement){
  this.count=this.count-1;
  var translate=this.count*71;
  const animateup=this.builder.build([
    animate(400, style({
      transform: 'translateY(-'+translate+'vh)'
    }))
  ]);
  var play1=animateup.create(element);
  play1.play();
  element.style.transform='translateY(-'+translate+'vh)';
}
count1:number=3;
translatedown2(element: HTMLElement){
  this.count1=this.count1-1;
  var translate=this.count1*71;
  const animateup=this.builder.build([
    animate(400, style({
      transform: 'translateY(-'+translate+'vh)'
    }))
  ]);
  var play1=animateup.create(element);
  play1.play();
  element.style.transform='translateY(-'+translate+'vh)';
}
translateup2(element: HTMLElement){
  this.count1=this.count1+1;
  var translate=this.count1*71;
  const animateup=this.builder.build([
    animate(400, style({
      transform: 'translateY(-'+translate+'vh)'
    }))
  ]);
  var play1=animateup.create(element);
  play1.play();
  element.style.transform='translateY(-'+translate+'vh)';
}
  constructor(private router: Router,private builder: AnimationBuilder) { }

  ngOnInit() {
  }

}
