import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Movies, moviesDto } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  moviesList: Movies[] = [];
  totalPage: number = 0;
  totalResults: number=0;

  totalMovies!: moviesDto|null;
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMoviesBasedOnPage(1);
  this.moviesService.getMovies().subscribe(response =>{
      this.totalMovies = response;
    this.totalPage = response.total_pages;
   this.totalResults = response.total_results;

   });
   
  }

  getMoviesBasedOnPage(page : number = 1){
    this.moviesService.searchMovies(page).subscribe((response)=>{
      this.moviesList = response;
      })
  }

  paginate(event:any){
    console.log(event);
    this.getMoviesBasedOnPage(event.page+1);
  }
}
