import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ApodGalleryService } from './apod-gallery.service';

@Component({
  selector: 'nasa-apod-gallery',
  templateUrl: './apod-gallery.component.html',
  styleUrls: ['./apod-gallery.component.scss'],
})
export class ApodGalleryComponent implements OnInit, AfterViewChecked {
  gallery: Array<Object> = [];
  figure;
  _isLoading = true;
  constructor(private serv: ApodGalleryService) {}
  ngAfterViewChecked() {
    console.log('update');
    // if (this.figure.url ) {
    //   this._isLoading = false;
    // }
  }
  ngOnInit() {
    this.serv.getPic().subscribe(resp => {
      const figure = Object.assign(resp, { loaded: false });
      this.gallery = [...this.gallery, figure];
    });
  }
  dosomething(i) {
    this.gallery[i]['loaded'] = true;
    console.log(i);
  }
}
