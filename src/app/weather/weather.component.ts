import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';

import { HttpServiceService } from '../http-service.service';
import { ShowErrorsComponent } from '../show-errors/show-errors.component';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnChanges {
  date: number;
  data: any;
  day: any;
  nextDay: any;
  dayAfter: any;
  twoDayAfter: any;
  nextDayData;
  currentDate: any;
  year;
  todayDate;
  month;

  loading = false;
  @Input() error;
  daysofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  @Input() lat = '';
  @Input() lon = '';

  constructor(public http: HttpServiceService,
    private dialog: MatDialog) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.http.searchCity.changes)
      console.log(changes);

  }
  async ngOnInit(): Promise<void> {
    this.loadWeather();
  }

  loadWeather() {
    this.loading = true;
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
            this.loading = false; 
          })
      }, (error => {
        console.log(error);
        this.error = error.error.message;
        this.openDialog();
        this.loading =false;

      }))

  }
  timeToDate() {
    const unixTime = this.date;
    let date = new Date(unixTime * 1000);
    let today = date.toLocaleDateString("de-de")
    this.day = this.daysofWeek[date.getDay()];

    this.todayDate = today.split('.')[0];
    this.month = date.toLocaleString("de-DE", { month: 'short' });
    this.year = today.split('.')[2];

    let pos = this.daysofWeek.indexOf(this.day);
    this.nextDay = this.daysofWeek[(pos + 1) % this.daysofWeek.length];
    this.dayAfter = this.daysofWeek[(pos + 2) % this.daysofWeek.length];
    this.twoDayAfter = this.daysofWeek[(pos + 3) % this.daysofWeek.length];


  }
  onNoClick() {

  }
  openDialog() {
    const dialogRef = this.dialog.open(ShowErrorsComponent);
    dialogRef.componentInstance.error = this.error;
  }
}
