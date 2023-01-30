import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../../models/movie";

@Component({
  selector: 'app-movie-trailer-card',
  templateUrl: './movie-trailer-card.component.html',
  styleUrls: ['./movie-trailer-card.component.css']
})
export class MovieTrailerCardComponent implements OnInit {

  @Input() movie: Movie = {} as Movie

  constructor() { }

  ngOnInit(): void {
  }

}
