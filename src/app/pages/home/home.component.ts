import { Component, OnInit } from '@angular/core';
import { Movies, moviesDto } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  upcomingMovies: Movies[] =  [];
  popularMovies: Movies[] =  [];
  topRatedMovies: Movies[] = [];
  constructor(private moviesService: MoviesService) { }
/**
 * 
 
  ngOnInit(): void {
     this.moviesService.getMovies().subscribe((response)=>{
     this.upcomingMovies = response.results;
     })

     this.moviesService.getMovies('popular').subscribe((response: moviesDto)=>{
      this.popularMovies = response.results;
     })

      this.moviesService.getMovies('top_rated').subscribe((response: moviesDto)=>{
        this.topRatedMovies = response.results;
     
    })
  }
*/
ngOnInit(): void {
  this.moviesService.getMoviesDetails().subscribe((response)=>{
    this.upcomingMovies = response;
    })

    this.moviesService.getMoviesDetails('popular').subscribe((response)=>{
     this.popularMovies = response;
    })

     this.moviesService.getMoviesDetails('top_rated').subscribe((response)=>{
       this.topRatedMovies = response;
    
   })
}
}
