import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'nasa-nav-bar',
  template: `
    <figure>
		<figcaption>NASA API</figcaption>
      <img src="../../../assets/images/NASA_logo.svg" alt="logo NASA" />
    </figure>
    <p-menu [model]="menu" styleClass="menu"></p-menu>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .ui-menu {
        border: 1px solid;
        padding: 5px;
        width: 250px;
        box-sizing: border-box;
      }
    `,
    `
      .menu .ui-menu {
        min-width: 350px;
        border: 1px solid;
        background-color: red;
      }
    `,
    `
      img {
				width: auto;
				height:60px;
      }
    `,
    `
      figure {
        display: flex;
				justify-content: space-between;
				align-items:center;
      }
    `,
  ],
})
export class NavBarComponent implements OnInit {
  menu;
  constructor() {}

  ngOnInit() {
    this.menu = [
      { label: 'Home', icon: 'pi pi-images' },
      { label: 'Gallery', icon: 'fa fa-fw fa-calendar' },
      { label: 'Search', icon: 'fa fa-fw fa-book' },
      { label: 'Planets', icon: 'fa fa-fw fa-support' },
      { label: 'Nasa', icon: 'pi pi-ban' },
      { label: 'Nasa API', icon: 'pi pi-ban' },
    ];
  }
}
