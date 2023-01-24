import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movie-home-page',
  templateUrl: './movie-home-page.component.html',
  styleUrls: ['./movie-home-page.component.css']
})
export class MovieHomePageComponent implements OnInit {

  trendingMovies: any[] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.getTrendingMoviesDay();
  }

  getTrendingMoviesDay() {
    this.movieService.getTrendingMoviesDay().subscribe((movies) => {
      this.trendingMovies = [...this.trendingMovies, ...movies];
    });
  }
}
