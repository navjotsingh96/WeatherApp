
import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceService } from './http-service.service';
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather-App';
  public weather: any = [];


  constructor(private httpService: HttpServiceService) { }


  ngOnInit() {
    this.httpService
      .getPosts()
      .subscribe((respone) => {
        this.weather.push(respone.body);
        console.log(respone);
        (error: any) => {
          console.log(error);
        }
      })
 console.log(this.weather);
 
      
    };
  }
