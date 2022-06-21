import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpServiceService } from '../http-service.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  date: any;
  currentWeather: any;

  constructor(public app: AppComponent,
    public http: HttpServiceService) { }

  ngOnInit(): void {

    let loadedInfo = this.app.weather;
    console.log('from Weathercomopnet', loadedInfo);
    const unixTime = 1210981217;
    const date = new Date(unixTime * 1000);
    console.log(date.toLocaleDateString("de-DE"));

  }

}
