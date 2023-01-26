import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { IMAGES } from 'src/app/Constants/images';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.scss']
})
export class MoviesItemComponent implements OnInit {

  @Input()
  movieItem!: Movies | null;

  imageUrl =  IMAGES;
  constructor() { }

  ngOnInit(): void {
  }

}
