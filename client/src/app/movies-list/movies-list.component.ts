import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';
import { Movie } from '../shared/models/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];
  visualMovies: any;
  constructor(public movieService: MovieService) {
    this.movies = [];
    this.visualMovies = [];
  }
  ngOnInit() {
    this.getMovies();
  }
  getMovies() {
    this.movieService.getAll().then(result => {
      (result as Movie[]).map(movie => this.movies.push(movie as Movie));
      this.generateVisualMovies();
    });
  }
  generateVisualMovies() {
    let tmpArray = [];
    this.movies.map((element, i) => {
      if (i % 4 === 0) {
        if (tmpArray.length > 0) {
          this.visualMovies.push(tmpArray);
        }
        tmpArray = [];
        tmpArray.push(element);
      } else {
        tmpArray.push(element);
        if (i === this.movies.length - 1) {
          this.visualMovies.push(tmpArray);
        }
      }
    });
  }
}
