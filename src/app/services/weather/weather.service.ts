import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ICurrentWeather } from 'src/app/interfaces/current';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = `${environment.BASE_URL}nairobi&&appid=${environment.API_KEY}`;

  constructor(private http: HttpClient) { }

  getCurrentWeather(): Observable<ICurrentWeather> {
    return this.http.get<ICurrentWeather>(this.url);
  }
}
