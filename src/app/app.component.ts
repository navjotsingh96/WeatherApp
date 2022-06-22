
import { Component, Input, OnInit, Output, SimpleChange } from '@angular/core';
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
 
  constructor(private httpService: HttpServiceService) { }


  ngOnChanges(changes: SimpleChange) {
    console.log('HIer are changes', changes);

  }
}
