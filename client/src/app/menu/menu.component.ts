import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( public http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:9000/api/movies').toPromise()
    .then(result => console.log(result))
    .catch(err => console.log(err));
  }

}
