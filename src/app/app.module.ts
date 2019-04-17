import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApodGalleryComponent } from './components/apod-gallery/apod-gallery.component';
import { MenuModule } from 'primeng/menu';
import { SharedModule } from './components/shared/shared.module';
import { RestService } from './components/shared/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: ApodGalleryComponent },
  { path: 'search', component: SearchComponent },
  { path: 'planets', component: PlanetsComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
	},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ApodGalleryComponent,
    HomeComponent,
    SearchComponent,
    PlanetsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenuModule,
    TabMenuModule,
    ProgressSpinnerModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    AccordionModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [RestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
