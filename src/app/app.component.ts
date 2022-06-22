
import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { data } from './bodyData';
import { HttpServiceService } from './http-service.service';
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather-App';
  Currentweather =[];


  constructor(private httpService: HttpServiceService) { }


  ngOnInit() {
    this.httpService
      .getPosts()
      .subscribe((body) => {
        this.Currentweather.push(body) ;
        console.log(body);
        console.log(this.Currentweather);

      })
    console.log(this.Currentweather);
  };
}
