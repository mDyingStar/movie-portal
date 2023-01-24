import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {Movie} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  getUpcomingMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${environment.apiKey}&language=en-US&page=1`);
  }

  getTopRatedMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${environment.apiKey}&language=en-US&page=1`);
  }

  getPopularMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${environment.apiKey}&language=en-US&page=1`);
  }

  getTrendingMoviesDay() {
    return this.http.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${environment.apiKey}`)
      .pipe(
        map((response: any) => {
          return response.results.map((movie: any) => {
            return {
              id: response.id,
              original_title: movie.original_title,
              vote_average: movie.vote_average,
              poster_path: movie.poster_path,
              backdrop_path: movie.backdrop_path,
              release_date: movie.release_date,
              genre_ids: movie.genre_ids
            } as Movie;
          });
        }));
  }

  getTrendingMoviesWeek() {
    return this.http.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${environment.apiKey}`);
  }

  getSearchedMovie(name: String) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${environment.apiKey}` +
      `&language=en-US&query=${name}&page=1&include_adult=true`);
  }
}
