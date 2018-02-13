import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const BASE_URL = 'http://localhost:9000/api/movies';
const HEADER = { headers: new Headers({ 'Content-type': 'application/json' }) };
@Injectable()
export class MovieService {
  constructor(public http: HttpClient) {}
  getAll() {
    return this.http.get(BASE_URL).toPromise();
  }
  getMoviesCount() {
    return this.http.get(`${BASE_URL}/count`).toPromise();
  }
}
