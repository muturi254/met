import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from 'src/app/interfaces/current';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: ICurrentWeather;
  weather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getCurrent();
    
  }

  getCurrent(): void {
    this.weatherService.getCurrentWeather().subscribe(response => {
      this.data = response;
      // destruct weather array
      this.data.weather = this.data.weather[0];      
    })
  }

}
