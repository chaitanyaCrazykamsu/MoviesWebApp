import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';
import { IMAGES } from 'src/app/Constants/images';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movies|null = null;
  images=IMAGES;
  constructor(private route:ActivatedRoute, private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({movieId}) =>{
     this.moviesService.getSingleMovieDetails(movieId).subscribe(res=>{
      this.movie = res;
     })
     
      
    })
  }

}
