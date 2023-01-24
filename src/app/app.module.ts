import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {MovieHomePageComponent} from './components/movie-home-page/movie-home-page.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import { MovieTrailerCardComponent } from './components/movie-trailer-card/movie-trailer-card.component';
import { MovieTrailerListComponent } from './components/movie-trailer-list/movie-trailer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieListComponent,
    MovieHomePageComponent,
    MovieTrailerCardComponent,
    MovieTrailerListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
