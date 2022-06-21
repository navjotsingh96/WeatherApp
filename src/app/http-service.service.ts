import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  [x: string]: any;
  city = 'Berlin';
  
  searchCity: any;
  private url: string = 'https://api.openweathermap.org/data/2.5/weather?q=titisee-neustadt&appid=73892cf023bdc9c2cffd21b4ed49c95a&units=metric';
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url, { observe: 'response' });
  }
  onSubmit() {
  let cal =  Math.floor(new Date().getTime()/1000.0)
    console.log('HIer ist', cal);

  }
  try() {
    return this.searchCity.value;
  }
}
