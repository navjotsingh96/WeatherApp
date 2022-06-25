import { HttpClient } from '@angular/common/http';
import { Injectable, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { data } from './bodyData';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService  {

  @Input() city = 'stuttgart';

  searchCity: any;
  constructor(private http: HttpClient) { }


  getPosts() {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=73892cf023bdc9c2cffd21b4ed49c95a&units=metric';

    return this.http.get<Body>(url, { observe: 'body' });
  }
  getWeatherFromCoardinate(lat, lon) {
    let url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=metric&appid=73892cf023bdc9c2cffd21b4ed49c95a&units=metric';
    return this.http.get(url);
  }
 


}


