import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Subject, takeUntil} from "rxjs";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-movie-home-page',
  templateUrl: './movie-home-page.component.html',
  styleUrls: ['./movie-home-page.component.css']
})
export class MovieHomePageComponent implements OnInit {
  private unsubscribe$ = new Subject();

  trendingMovies: any[] = [];
  showTrendingMoviesDay = true;

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.getTrendingMoviesDay();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  getTrendingMoviesDay() {
    this.movieService.getTrendingMoviesDay()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((movies) => {
      this.trendingMovies = [...this.trendingMovies, ...movies];
    });
  }

  changeTrendingMovies($event: MatSlideToggleChange) {
    this.showTrendingMoviesDay = $event.checked;
    console.log(this.showTrendingMoviesDay);
  }
}
