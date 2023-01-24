import {Component, Input, OnInit} from '@angular/core';
import {Trailer} from "../../models/trailer";

@Component({
  selector: 'app-movie-trailer-card',
  templateUrl: './movie-trailer-card.component.html',
  styleUrls: ['./movie-trailer-card.component.css']
})
export class MovieTrailerCardComponent implements OnInit {

  @Input() trailer: Trailer = {} as Trailer;

  constructor() { }

  ngOnInit(): void {
  }

}
