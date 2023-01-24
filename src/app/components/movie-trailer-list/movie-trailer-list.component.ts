import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-movie-trailer-list',
  templateUrl: './movie-trailer-list.component.html',
  styleUrls: ['./movie-trailer-list.component.css']
})
export class MovieTrailerListComponent implements OnInit {

  @Input() movies: Movie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
