import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';

import { ProjectOneComponent } from './project-one/project-one.component';


const routes: Routes = [
  {
    path: "",
    component: ProjectOneComponent
  },
  {
    path: 'hotel',
    component: HotelComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
