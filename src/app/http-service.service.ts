import { HttpClient } from '@angular/common/http';
import { Injectable, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { data } from './bodyData';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService implements OnChanges {

  @Input() city = 'Berlin';

  searchCity: any;
  private url: string = 'https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=73892cf023bdc9c2cffd21b4ed49c95a&units=metric';
  constructor(private http: HttpClient) { }





  getPosts() {
    return this.http.get<Body>(this.url, { observe: 'body' });
  }
  onSubmit() {
    let cal = Math.floor(new Date().getTime() / 1000.0)
    console.log('HIer ist', cal);
    console.log(this.city);


  }
  try() {
    return this.city = this.searchCity;
    console.log(this.searchCity);
  }
  ngOnChanges(changes: SimpleChanges): void {

    console.log(changes);

  }
}
