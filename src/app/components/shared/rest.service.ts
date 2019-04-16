import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  key = 'pzXOn2yp335zmTjQ2lqolN8T5nFXtMUXXnr9hZc7';
  apodUrl = 'https://api.nasa.gov/planetary/apod';

  constructor(private http: HttpClient) {}
  getRandApod() {
    return this.http.get(`${this.apodUrl}?date=2015-03-25&api_key=${this.key}`);
  }

  randomDate() {
    const startDate = new Date(2010, 0, 1).getTime(),
      endDate = new Date(2017, 0, 1).getTime(),
      spaces = endDate - startDate;
    let timestamp = Math.round(Math.random() * spaces);
    timestamp += startDate;
    return new Date(timestamp);
  }
  formatDate(date) {
    // let month = this.randomDate().getMonth() + 1;
    // let day = this.randomDate().getDate();
    // month = month < 10 ? '0' + month : month;
    // day = day < 10 ? '0' + day : day;
    // return String(date.getFullYear()) + '-' + month + '-' + day;
  }
}
