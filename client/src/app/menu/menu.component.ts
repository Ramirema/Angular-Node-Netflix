import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  count: number;
  constructor(public movieService: MovieService) {
    this.count = 0;
  }

  ngOnInit() {
    this.getCountFromServer();
  }
  getCountFromServer() {
    this.movieService
      .getMoviesCount()
      .then(result => (this.count = result as number));
  }
}
