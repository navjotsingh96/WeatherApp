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
  day: any;
  nextDay: any = '';
  dayAfter: any;
  twoDayAfter: any;
  nextDayData;
  currentDate: any;
  year;
  todayDate;
  month;

  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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
          .subscribe((coord) => {
            this.nextDayData = coord;
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
    this.day = this.days[date.getDay()];

    let pos = this.days.indexOf(this.day);
    this.nextDay = this.days[(pos + 1) % this.days.length];
    this.dayAfter = this.days[(pos + 2) % this.days.length];
    this.twoDayAfter = this.days[(pos + 3) % this.days.length];

    this.todayDate = today.split('.')[0];
    this.month = date.toLocaleString("de-DE", { month: 'short' });
    this.year = today.split('.')[2];

   /*  if (this.dayAfter === "Saturday") {
      this.twoDayAfter = this.days[0];
      console.log('alert');

    }
    else if (this.nextDay == "Saturday") {
      this.dayAfter = this.days[0];

    }
    else { */
     /*  this.nextDay = this.days[date.getDay() + 1];
      this.dayAfter = this.days[date.getDay() + 2];
      this.twoDayAfter = this.days[date.getDay() + 3]; */

    

    console.log(this.twoDayAfter);
    let tryit = new Date(unixTime * 1000).getDay();

    console.log(date.toLocaleDateString("de-DE"));


  }
}
