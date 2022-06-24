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
  getWeatherFromCoardinate(lat, lon) {
    let url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=metric&appid=73892cf023bdc9c2cffd21b4ed49c95a&units=metric';
    return this.http.get(url);
  }
  onSubmit() {
    console.log(this.city);
    this.getPosts();



  }
  try() {
    console.log('Clicked');
    this.city = this.searchCity;
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=73892cf023bdc9c2cffd21b4ed49c95a&units=metric';
    return this.http.get(url);
    console.log(this.city);
    console.log('From search city', this.http.get(url));
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getPosts()

    console.log(changes);

  }
}


function lon(lat: any, lon: any) {
  throw new Error('Function not implemented.');
}

