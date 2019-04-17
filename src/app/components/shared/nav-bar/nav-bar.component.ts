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
        icon: 'pi pi-home',
        routerLink: ['/gallery'],
      },
      { label: 'Search', icon: 'pi pi-search', routerLink: ['/Search'] },
      {
        label: 'Planets',
        icon: 'pi pi-globe',
        routerLink: ['/planets'],
      },
      {
        label: 'Nasa',
        icon: 'pi pi-info-circle',
        url: 'https://www.nasa.gov',
        target: '_blank',
      },
      {
        label: 'Nasa API',
        icon: 'pi pi-cog',
        url: 'https://api.nasa.gov/index.html',
        target: '_blank',
      },
    ];
  }
}
