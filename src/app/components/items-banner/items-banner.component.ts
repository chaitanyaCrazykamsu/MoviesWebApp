import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent implements OnInit {

  @Input() moviesList:Movies[] = [];
  @Input() title:String='';
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
