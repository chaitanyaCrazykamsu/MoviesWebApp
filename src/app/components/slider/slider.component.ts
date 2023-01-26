import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import {trigger,state,style,transition,animate} from '@angular/animations'
import { IMAGES } from 'src/app/Constants/images';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations:[trigger('fade',[
state('void',style({opacity:0})),
transition('void => *',[animate('1s')]),
transition('* => void',[animate('500ms')])
  ])
  ]
})
export class SliderComponent implements OnInit {

  @Input() moviesList:Movies[] = [];

  @Input() isBanner: Boolean=false;

  imageurl = IMAGES;
   currentSlideIndex: number = 0
  constructor() { }

  ngOnInit(): void {
    if(!this.isBanner){
    setInterval(()=>{
     this. currentSlideIndex++;
    },5000)
  }
  }

}
