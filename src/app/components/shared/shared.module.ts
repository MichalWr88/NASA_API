import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuModule } from 'primeng/menu';
@NgModule({
	imports: [BrowserModule, CommonModule, MenuModule],
  declarations: [NavBarComponent],
	exports: [NavBarComponent],
})
export class SharedModule {}
