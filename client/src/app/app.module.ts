import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieService } from './shared/movie.service';

@NgModule({
  declarations: [AppComponent, MenuComponent, MoviesListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
