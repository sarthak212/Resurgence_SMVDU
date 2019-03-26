import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { FrontComponent } from './front/front.component';
import { EventsComponent } from './events/events.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    data: { animation: {
      page:'homepage'
    }}
  },
  {
    path:'about',
    component:AboutComponent,
    data: { animation: {
      page:'aboutpage'
    }}
  },
  {
    path:'gallery',
    component:GalleryComponent,
    data: { animation: {
      page:'gallerypage'
    }}
  },
  {
    path:'event',
    component:EventsComponent,
    data: { animation: {
      page:'eventpage'
    }}
  },
  {
    path:'front',
    component:FrontComponent,
    data: { animation: {
      page:'frontpage'
    }}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
