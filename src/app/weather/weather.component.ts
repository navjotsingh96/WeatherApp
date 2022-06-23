import { Component, Input, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { HttpServiceService } from '../http-service.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  date: number;
  data: any;
  nextDayData;
  currentDate: any;
  year;
  todayDate;
  month;
  nextDay;

  @Input() lat = '';
  @Input() lon = '';

  constructor(public http: HttpServiceService) { }

  async ngOnInit(): Promise<void> {
    this.http
      .getPosts()
      .subscribe((body) => {
        this.data = body;
        this.date = this.data['dt'];
        this.lat = this.data.coord['lat'];
        this.lon = this.data.coord['lon'];
        this.timeToDate();
        this.http.getWeatherFromCoardinate(this.lat, this.lon)
        .subscribe((coord)=>{
          this.nextDayData =coord;
          console.log('this is new', this.nextDayData);
          
        })
      })


    /*  this.data = await firstValueFrom(this.http.getPosts());
     this.date = this.data['dt'];
     this.timeToDate(); */
  };
 
  timeToDate() {
    const unixTime = this.date;
    let date = new Date(unixTime * 1000);
    let today = date.toLocaleDateString("de-de")
    this.todayDate = today.split('.')[0];
    this.month = date.toLocaleString("de-DE", { month: 'short' });
    this.year = today.split('.')[2];

    console.log(date.toLocaleDateString("de-DE"));


  }
}
