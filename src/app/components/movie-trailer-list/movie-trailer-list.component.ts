import {Component, Input, OnInit} from '@angular/core';
import {Trailer} from "../../models/trailer";

@Component({
  selector: 'app-movie-trailer-list',
  templateUrl: './movie-trailer-list.component.html',
  styleUrls: ['./movie-trailer-list.component.css']
})
export class MovieTrailerListComponent implements OnInit {

  @Input() trailers: Trailer[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
