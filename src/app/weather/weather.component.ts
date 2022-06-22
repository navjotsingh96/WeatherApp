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
  currentDate: any;
  year;
  todayDate;
  month;


  constructor(public http: HttpServiceService) { }

  async ngOnInit(): Promise<void> {
    this.http
      .getPosts()
      .subscribe((body) => {
        this.data = body;
        this.date = this.data['dt'];
        this.timeToDate();
        console.log('This is data', this.data);
        
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
    this.month = date.toLocaleString("de-DE", {month: 'short'});
    this.year =  today.split('.')[2];
  
    console.log(date.toLocaleDateString("de-DE"));
   

  }
}
