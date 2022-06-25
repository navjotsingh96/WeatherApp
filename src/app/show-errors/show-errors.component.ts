import { Component, Input, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.scss']
})
export class ShowErrorsComponent implements OnInit {
error;
  constructor() { }

  ngOnInit(): void {


  }

}
