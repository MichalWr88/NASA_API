import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  key = 'pzXOn2yp335zmTjQ2lqolN8T5nFXtMUXXnr9hZc7';
  apodUrl = 'https://api.nasa.gov/planetary/apod';
  neoFeedUrl = 'https://api.nasa.gov/neo/rest/v1/feed';
  searchUrl = 'https://images-api.nasa.gov/search';

  constructor(private http: HttpClient) {}
  getRandApod(date = '2015-03-25') {
    return this.http.get(`${this.apodUrl}?date=${date}&api_key=${this.key}`);
  }
  getCurrentApod() {
    return this.http.get(`${this.apodUrl}?api_key=${this.key}`);
  }
  getAsteroidsFeed(start = '2015-09-07', end = '2015-09-08') {
    return this.http.get(
      `${this.neoFeedUrl}?start_date=${start}&end_date=${end}&api_key=${
        this.key
      }`
    );
  }
  getSearch(
    { q, keywords, page, media, start, end } = {
      q: '',
      keywords: '',
      page: 1,
      media: 'image,video,audio',
      start: 2005,
      end: 2019,
    }
  ) {
    return this.http.get(
      `${
        this.searchUrl
      }?q=${q}&keywords=${keywords}&page=${page}&media=${media}&yearStart=${start}&yearEnd=${end}`
    );
  }
  randomDate(start = 2010, end = new Date().getFullYear()) {
		const startDate = new Date(start, 0, 1).getTime(),
			endDate = new Date(end, 0, 1).getTime(),
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
