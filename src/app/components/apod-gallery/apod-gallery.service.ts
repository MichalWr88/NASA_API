import { Injectable } from '@angular/core';
import { RestService } from '../shared/rest.service';

@Injectable({
  providedIn: 'root',
})
export class ApodGalleryService {
	gallery: Array<any>;

  constructor(private rest: RestService) {
  }
	getPic() {
    return this.rest.getRandApod();
  }
}
