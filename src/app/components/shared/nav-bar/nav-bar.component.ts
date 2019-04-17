import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'nasa-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavBarComponent implements OnInit {
  menu: MenuItem[];
  constructor() {}

  ngOnInit() {
    this.menu = [
      { label: 'Home', icon: 'pi pi-images', routerLink: ['/home'] },
      {
        label: 'Gallery',
        icon: 'fa fa-fw fa-calendar',
        routerLink: ['/gallery'],
      },
      { label: 'Search', icon: 'fa fa-fw fa-book', routerLink: ['/Search'] },
      {
        label: 'Planets',
        icon: 'fa fa-fw fa-support',
        routerLink: ['/planets'],
      },
      {
        label: 'Nasa',
        icon: 'pi pi-ban',
        url: 'https://www.nasa.gov',
        target: '_blank',
      },
      {
        label: 'Nasa API',
        icon: 'pi pi-ban',
        url: 'https://api.nasa.gov/index.html',
        target: '_blank',
      },
    ];
  }
}
