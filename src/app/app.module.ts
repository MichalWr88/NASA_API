import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApodGalleryComponent } from './components/apod-gallery/apod-gallery.component';
import { MenuModule } from 'primeng/menu';
import { SharedModule } from './components/shared/shared.module';
import { RestService } from './components/shared/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

const appRoutes: Routes = [
  { path: 'gallery', component: ApodGalleryComponent },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [AppComponent, NavBarComponent, ApodGalleryComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenuModule,
    TabMenuModule,
		ProgressSpinnerModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AccordionModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [RestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
